module ActivityPub
  class ObjectResolver
    # Creates a new draft ActivityPub::Object record or finds already existing
    # one for given guid and enqueues `ActivityPub::ResolveObjectJob` for this
    # record.
    #
    # For subsequential object resolving. Should be called by
    # RootObjectResolver, do not call it directly.
    def initialize(uri, actor: nil, shallow: false, skip_if_fresh: true)
      @uri = uri
      @shallow = shallow
      @skip_if_fresh = skip_if_fresh
      @actor = actor
    end

    def call
      logger.info "Resolving #{@uri}..."

      local_object = ActivityPub::Object.find_or_initialize_by(guid: @uri)
      remote_object = HttpClient.new(@actor).get(URI.parse(local_object.guid)).body
      remote_object = ActivityPub::ObjectDataSanitizer.new(remote_object).call

      if skip_if_fresh && local_object.fresh?
        logger.info 'Object fresh, skip'
        return local_object
      end

      local_object.ancestry ||= '/'
      local_object.type = model_from_type(remote_object['type'])
      local_object = local_object.becomes(local_object.type.constantize)

      local_object.status_syncing! if local_object.persisted?
      local_object.error_message = nil

      # We don't want to accept dates from the future. If incoming date is in the
      # future, just replace it with current time. Supporting future dates comes
      # with a risk of abuse.
      local_object.created_at = [remote_object['published'], Time.current].compact.min

      # Call appropriate handler class
      handler_class(remote_object).new(
        local: local_object,
        remote: remote_object
      ).call

      # Resolve authors
      attributed_to = remote_object['attributed_to']
      if attributed_to&.any?
        attributed_to.each do |attribution|
          logger.info "Resolving attribution for #{attribution}..."
          attributor = ActivityPub::Object.find_or_create_by(guid: attribution)
          local_object.attributed_to_associations.find_or_create_by(target_ap_object: attributor)
          ActivityPub::ObjectResolver.new(attribution).call
        end
      end

      # Resolve replies
      # @todo that should be happening asynchronously
      #
      # if !shallow
      #   logger.info 'Resolving replies...'
      #   ActivityPub::ObjectResolver.new(remote_object.dig('replies', 'id')).call if remote_object['replies']
      # end

      # Resolve parent
      if remote_object['in_reply_to']
        logger.info 'Resolving parent...'
        parent_obj = ActivityPub::Object.find_or_create_by(guid: remote_object['in_reply_to'])
        local_object.in_reply_to = parent_obj
        ActivityPub::ObjectResolver.new(parent_obj.guid).call
      end

      if local_object.persisted?
        local_object.touch(:last_synced_at)
        local_object.status_synced!
      end

      local_object
    rescue => e
      local_object.update!(
        status: :failing,
        error_message: e.message
      )
      raise e
    end

    private

    attr_reader :skip_if_fresh, :shallow

    def handler_class(object)
      ActivityPub.object_handlers[object['type']] || ActivityPub::ObjectHandlers::UnknownHandler
    end

    def model_from_type(type)
      ActivityPub.object_type_models[type] || ActivityPub::Unknown
    end

    def logger
      Rails.logger
    end
  end
end
