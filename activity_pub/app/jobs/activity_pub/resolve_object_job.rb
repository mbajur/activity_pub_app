module ActivityPub
  class ResolveObjectJob < ApplicationJob
    include GoodJob::ActiveJobExtensions::Batches
    include GoodJob::ActiveJobExtensions::Concurrency

    good_job_control_concurrency_with(
      total_limit: 1,
      key: -> { "#{self.class.name}-#{queue_name}-#{arguments.first}" }
    )

    def perform(local_object)
      remote_object = HttpClient.new(nil).get(URI.parse(local_object.guid)).body

      if local_object.fresh?
        logger.info 'Object fresh, skip'
        return true
      end

      local_object.status_syncing! if local_object.persisted?
      local_object.error_message = nil
      local_object.created_at = [remote_object['published'], Time.current].compact.min

      self.batch.add do
        handler_class(remote_object).new(
          batch: self.batch,
          local: local_object,
          remote: remote_object
        ).call
      end

      self.batch.add do
        # Resolve authors
        if remote_object['attributedTo']
          attributed_to = remote_object['attributedTo'].is_a?(Array) ? remote_object['attributedTo'] : [remote_object['attributedTo']]

          attributed_to.each do |attribution|
            attributor = ActivityPub::Object.find_or_create_by(guid: attribution)
            local_object.attributed_to_associations.find_or_create_by(target_ap_object: attributor)
            ActivityPub::ObjectResolver.new(attribution).call
          end
        end

        # Resolve replies
        ActivityPub::ObjectResolver.new(remote_object.dig('replies', 'id')).call if remote_object['replies']

        # Resolve parent
        if remote_object['inReplyTo']
          in_reply_to = remote_object['inReplyTo'].is_a?(Array) ? remote_object['inReplyTo'][0] : remote_object['inReplyTo']
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
      {
        'Note' => ActivityPub::ObjectHandlers::NoteHandler,
        'Announce' => ActivityPub::ObjectHandlers::AnnounceHandler,
        'Person' => ActivityPub::ObjectHandlers::PersonHandler,
        'Service' => ActivityPub::ObjectHandlers::ServiceHandler,
        'Collection' => ActivityPub::ObjectHandlers::CollectionHandler,
        'OrderedCollection' => ActivityPub::ObjectHandlers::OrderedCollectionHandler,
        'CollectionPage' => ActivityPub::ObjectHandlers::CollectionPageHandler,
        'OrderedCollectionPage' => ActivityPub::ObjectHandlers::OrderedCollectionPageHandler,

        'Create' => ActivityPub::ObjectHandlers::CreateHandler,
      }[object['type']] || ActivityPub::ObjectHandlers::UnknownHandler
    end
  end
end
