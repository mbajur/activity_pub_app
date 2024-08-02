module ActivityPub
  class NoteResource
    include RoutingHelper
    include BaseResource

    object_type 'Note'

    has_inbox false
    has_outbox false
    has_followers false

    register_data_attribute :content
    register_data_attribute :url
    register_data_attribute :published_at

    register_field :content

    public_url_resolver do |object|
      "https://#{ActivityPub.domain}/notes/#{object.id}"
    end

    def guid
      @object.guid.presence || activity_pub_app.object_url(@object, **default_url_options)
    end
  end
end
