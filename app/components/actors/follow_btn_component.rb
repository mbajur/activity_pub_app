# frozen_string_literal: true

class Actors::FollowBtnComponent < ViewComponent::Base
  def initialize(actor:, target_actor:)
    @actor = actor
    @target_actor = target_actor
  end

  def following?
    @actor.following.include?(@target_actor)
  end
end
