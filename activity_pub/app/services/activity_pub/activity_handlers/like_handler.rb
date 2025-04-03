module ActivityPub
  module ActivityHandlers
    class LikeHandler < BaseHandler
      def call
        verify_signature!

        sanitized_body = ActivityPub::ObjectDataSanitizer.new(body).call
        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(sanitized_body.dig('object', 'id')).call
        local_target = ActivityPub::Object.find_by(id: local_target_guid)
        raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found" unless local_target

        local_actor_guid = sanitized_body.dig('actor', 'id')
        local_actor = ActivityPub::Object.find_by(guid: local_actor_guid)
        raise ActiveRecord::RecordNotFound, "Local actor #{local_actor_guid} not found" unless local_actor

        like = ActivityPub::Like.find_or_initialize_by(
          source_ap_object: local_actor,
          target_ap_object: local_target
        )

        like.guid = body['id']
        like.save!
      end
    end
  end
end
