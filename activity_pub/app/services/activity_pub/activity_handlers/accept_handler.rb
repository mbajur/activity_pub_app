module ActivityPub
  module ActivityHandlers
    class AcceptHandler < BaseHandler
      def call
        verify_signature!

        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body.dig('object', 'object')).call
        local_target = ActivityPub::Object.local.find_by(id: local_target_guid)
        raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found" unless local_target

        local_actor_guid = body.dig('object', 'actor')
        local_actor = ActivityPub::Object.find_by(guid: local_actor_guid)
        raise ActiveRecord::RecordNotFound, "Local actor #{local_actor_guid} not found" unless local_actor

        follow = Follow.find_by(source_ap_object: local_actor, target_ap_object: local_target)
        raise ActiveRecord::RecordNotFound, 'Follow record not found' unless follow

        follow.confirmed!
      end
    end
  end
end
