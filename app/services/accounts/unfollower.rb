module Accounts
  class Unfollower < ApplicationService
    arg :actor, type: ActivityPub::Person
    arg :target

    step :find_follow
    step :mark_as_undoed

    output :follow

    private

    def find_follow
      self.follow = ActivityPub::Follow.find_by(source_ap_object: actor, target_ap_object: target)
    end

    def mark_as_undoed
      self.follow&.undoed!
    end
  end
end
