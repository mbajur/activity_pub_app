module ActivityPub
  class ResolveObjectJob < ApplicationJob
    include GoodJob::ActiveJobExtensions::Batches
    include GoodJob::ActiveJobExtensions::Concurrency

    good_job_control_concurrency_with(
      total_limit: 1,
      key: -> { "#{self.class.name}-#{queue_name}-#{arguments.first}" }
    )

    def perform(local_object, shallow: false, skip_if_fresh: true)
      remote_object = HttpClient.new(nil).get(URI.parse(local_object.guid)).body
      remote_object = ActivityPub::ObjectDataSanitizer.new(remote_object).call

      if skip_if_fresh && local_object.fresh?
        logger.info 'Object fresh, skip'
        return true
      end

      local_object.type = model_from_type(remote_object['type'])
      local_object.status_syncing! if local_object.persisted?
      local_object.error_message = nil

      # We don't want to accept dates from the future. If incoming date is in the
      # future, just replace it with current time. Supporting future dates comes
      # with a risk of abuse.
      local_object.created_at = [remote_object['published'], Time.current].compact.min

      add_to_batch do
        handler_class(remote_object).new(
          batch: self.batch,
          local: local_object,
          remote: remote_object
        ).call
      end

      add_to_batch do
        # Resolve authors
        if remote_object['attributed_to'] && !shallow
          attributed_to = remote_object['attributed_to'].is_a?(Array) ? remote_object['attributed_to'] : [remote_object['attributed_to']]

          attributed_to.each do |attribution|
            attributor = ActivityPub::Object.find_or_create_by(guid: attribution)
            local_object.attributed_to_associations.find_or_create_by(target_ap_object: attributor)
            ActivityPub::ObjectResolver.new(attribution).call
          end
        end

        # Resolve replies
        if !shallow
          ActivityPub::ObjectResolver.new(remote_object.dig('replies', 'id')).call if remote_object['replies']
        end

        # Resolve parent
        if remote_object['in_reply_to'] && !shallow
          in_reply_to = remote_object['in_reply_to'].is_a?(Array) ? remote_object['in_reply_to'][0] : remote_object['in_reply_to']
          parent_obj = ActivityPub::Object.find_or_create_by(guid: in_reply_to)
          local_object.in_reply_to = parent_obj
          ActivityPub::ObjectResolver.new(in_reply_to).call
        end
      end

      if local_object.persisted?
        local_object.touch(:last_synced_at)
        local_object.status_synced!
      end
    rescue => e
      local_object.update!(
        status: :failing,
        error_message: e.message
      )
      raise e
    end

    private

    def handler_class(object)
      ActivityPub.object_handlers[object['type']] || ActivityPub::ObjectHandlers::UnknownHandler
    end

    def model_from_type(type)
      ActivityPub.object_type_models[type] || ActivityPub::Unknown
    end

    # When this job is called directly, there is no `self.batch`. It probably
    # shouldn't be called directly so it has to be refactored but that will do
    # for now
    def add_to_batch(&block)
      self.batch ? self.batch.add { yield } : yield
    end
  end
end
