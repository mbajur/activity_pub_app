# frozen_string_literal: true

module Objects
  class FooterComponent < ViewComponent::Base
    attr_reader :object, :current_ap_actor, :liked_ap_object_ids

    def initialize(object, current_ap_actor:, liked_ap_object_ids: [])
      @object = object
      @current_ap_actor = current_ap_actor
      @liked_ap_object_ids = liked_ap_object_ids
      super
    end

    def liked?
      liked_ap_object_ids&.include?(object['id'])
    end

    def recent_likes
      @recent_likes ||= object.liked_by.newest_first.limit(3)
    end
  end
end
