module Accounts
  class Follower < ApplicationService
    arg :actor, type: ActivityPub::Person
    arg :target

    step :upsert_follow

    output :follow

    private

    def upsert_follow
      follow = ActivityPub::Follow.find_or_initialize_by(source_ap_object: actor, target_ap_object: target)
      follow.state = 'pending'
      follow.save!

      activity = ActivityPub::FollowSerializer.new(follow, with_context: true)
      ActivityPub::FederateObjectJob.perform_later(actor, target.data.inbox, activity.to_json)

      self.follow = follow
    end
  end
end
