# frozen_string_literal: true

module Objects
  class WrapComponent < ViewComponent::Base
    attr_reader :object, :current_ap_actor, :liked_ap_object_ids, :replies

    renders_one :left
    renders_one :right

    def initialize(object, current_ap_actor:, liked_ap_object_ids: [], replies: ActivityPub::Object.none)
      @object = object
      @current_ap_actor = current_ap_actor
      @liked_ap_object_ids = liked_ap_object_ids
      @replies = replies
      super
    end

    def content
      render(
        Objects::ContentComponent.new(
          object, current_ap_actor:    current_ap_actor,
                  liked_ap_object_ids: liked_ap_object_ids
        )
      )
    end
  end
end
