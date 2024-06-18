module ActivityPub
  module ActivityHandlers
    class LikeHandler < BaseHandler
      def call
        verify_signature!

        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body['object']).call
        local_target = ActivityPub::Object.find_by(id: local_target_guid)
        raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found" unless local_target

        local_actor_guid = body['actor']
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
