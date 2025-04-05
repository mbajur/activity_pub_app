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
      klass = component_for_type(object)
      return unless klass

      render(klass.new(object))
    end

    def component_for_type(object)
      {
        'ActivityPub::Note' => Objects::ContentNoteComponent,
        'ActivityPub::Article' => Objects::ContentArticleComponent,
        'ActivityPub::Announce' => Objects::ContentAnnounceComponent,
      }[object.type]
    end
  end
end
