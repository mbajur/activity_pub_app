module ActivityPub
  class ArticleResource
    include RoutingHelper
    include BaseResource

    object_type 'Article'

    has_inbox false
    has_outbox false
    has_followers false

    # register_field :published_at

    public_url_resolver do |object|
      "https://#{ActivityPub.domain}/posts/#{object.id}"
    end

    def guid
      @object.guid.presence || activity_pub_app.object_url(@object, **default_url_options)
    end
  end
end
