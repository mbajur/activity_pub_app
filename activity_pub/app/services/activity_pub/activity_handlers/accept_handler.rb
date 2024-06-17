module ActivityPub
  module ActivityHandlers
    class AcceptHandler < BaseHandler
      def call
        verify_signature!

        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body['object']).call
        local_target = ActivityPub::Object.local.find_by(id: local_target_guid)
        raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found" unless local_target

        follow = Follow.find_or_initialize_by(guid: body['id'])
        follow.source_ap_object = ActivityPub::ObjectEnsurer.new(body['actor']).call
        follow.target_ap_object = local_target

        if local_target.manually_approves_followers?
          follow.state = 'pending'
        else
          follow.state = 'confirmed'
        end

        follow.save!
      end
    end
  end
end
