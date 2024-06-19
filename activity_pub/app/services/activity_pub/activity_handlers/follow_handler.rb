module ActivityPub
  module ActivityHandlers
    class FollowHandler < BaseHandler
      def call
        verify_signature!

        local_target_guid = ActivityPub::UriToLocalObjectIdFinder.new(body['object']).call
        local_target = ActivityPub::Object.local.find_by(id: local_target_guid)
        raise ActiveRecord::RecordNotFound, "Local target #{local_target_guid} not found" unless local_target

        local_actor = ActivityPub::ObjectEnsurer.new(body['actor'], actor: local_target).call

        follow = Follow.find_or_initialize_by(
          source_ap_object: local_actor,
          target_ap_object: local_target
        )

        if local_target.manually_approves_followers
          follow.state = 'pending'
        else
          follow.state = 'confirmed'
        end

        follow.save!

        if follow.confirmed?
          activity = ActivityPub::AcceptSerializer.new(follow, with_context: true)
          ActivityPub::FederateObjectJob.perform_later(local_target, local_actor.ensure_type.inbox, activity.to_json)
        end
      end
    end
  end
end
