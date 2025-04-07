module ActivityPub
  class ArticleResource
    include RoutingHelper
    include BaseResource

    object_type 'Article'

    has_inbox false
    has_outbox false
    has_followers false

    register_data_attribute :name
    register_data_attribute :content
    register_data_attribute :content_raw
    register_data_attribute :content_mime_type
    register_data_attribute :url
    register_data_attribute :published_at

    register_field :content_raw
    register_field :published_at

    public_url_resolver do |object|
      "https://#{ActivityPub.domain}/posts/#{object.id}"
    end

    def guid
      @object.guid.presence || activity_pub_app.object_url(@object, **default_url_options)
    end
  end
end
