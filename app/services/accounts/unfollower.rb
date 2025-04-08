module Accounts
  class Unfollower < ApplicationService
    arg :actor, type: ActivityPub::Person
    arg :target

    step :find_follow
    step :mark_as_undoed
    step :distribute

    output :follow

    private

    def find_follow
      self.follow = ActivityPub::Follow.find_by(source_ap_object: actor, target_ap_object: target)
    end

    def distribute
      activity = ActivityPub::FollowSerializer.new(follow, with_context: true)
      ActivityPub::FederateObjectJob.perform_later(actor, target.data.inbox, activity.to_json)
    end

    def mark_as_undoed
      self.follow&.undoed!
    end
  end
end
