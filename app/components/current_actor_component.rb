# frozen_string_literal: true

class CurrentActorComponent < ViewComponent::Base
  def initialize(actor:)
    @actor = actor
  end
end
