# frozen_string_literal: true

module Objects
  class InteractionsComponent < ViewComponent::Base
    attr_reader :object

    def initialize(object)
      @object = object
      @current_ap_actor = Current.actor
      @liked_ap_object_ids = Current.liked_ap_object_ids
      super
    end

    def liked?
      Current.posts_likes_repo.liked?(object)
    end

    def recent_likes
      @recent_likes ||= object.liked_by.newest_first.limit(3)
    end

    def show_summary?
      object.likes_count.positive? || object.announced_count.positive?
    end

    def summary
      result = []

      result << summary_likes
      result << summary_boosts if object.announced_count.positive?

      result.to_sentence
    end

    def summary_likes
      parts = ["Liked by #{object.likes_count}"]
      parts << 'person'.pluralize(object.likes_count) if object.announced_count.zero?

      parts.join(' ')
    end

    def summary_boosts
      parts = ["boosted by #{object.announced_count}"]
      parts << 'person'.pluralize(object.announced_count)

      parts.join(' ')
    end

    def template; end
  end
end
