module ActivityPub
  module ActivityHandlers
    class FollowHandler < BaseHandler
      def call
        verify_signature!

        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body['object']).call
        local_target = ActivityPub::Object.local.find_by(guid: local_target_guid)
        raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found"

        follow = ActivityPub::ObjectAssociation.first_or_initialize_by(type: 'follow', guid: body['id'])
        return if follow.persisted?

        follow.ap_object = ActivityPub::ObjectEnsurer.new(body['actor']).call
        follow.target_ap_object = local_target
        follow.save!
      end
    end
  end
end
