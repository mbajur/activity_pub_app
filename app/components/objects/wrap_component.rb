# frozen_string_literal: true

module Objects
  class WrapComponent < ViewComponent::Base
    attr_reader :object, :current_ap_actor, :liked_ap_object_ids, :replies, :show_replies

    renders_one :left
    renders_one :right

    def initialize(object, current_ap_actor:, liked_ap_object_ids: [], replies: ActivityPub::Object.none, show_replies: true)
      @object = object
      @current_ap_actor = current_ap_actor
      @liked_ap_object_ids = liked_ap_object_ids
      @replies = replies
      @show_replies = show_replies
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
