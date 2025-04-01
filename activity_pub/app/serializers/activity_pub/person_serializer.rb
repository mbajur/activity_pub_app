module ActivityPub
  class PersonSerializer < BaseSerializer
    def data
      result = {
        id:   resource.local_guid,
        type: resource.object_type,
        url:  resource.public_url,
      }

      result[:endpoints] = endpoints if resource.has_inbox?
      result[:inbox]  = activity_pub_app.object_inbox_url(object, **default_url_options) if resource.has_inbox?
      result[:outbox] = activity_pub_app.object_outbox_url(object, **default_url_options) if resource.has_outbox?
      result[:followers] = resource.followers_url

      resource.fields.each do |field|
        result[field.key] = resource.field_value(field.key)
      end

      avatar = object.activity_pubable.avatar
      if avatar.present?
        result[:icon] = {
          type: 'Image',
          mediaType: avatar.content_type,
          url: avatar.url(host: host_with_protocol),
          width: avatar.width,
          height: avatar.height,
        }
      end

      result
    end

    private

    def resource
      @resource ||= ObjectResource.new(object)
    end

    def endpoints
      {
        shared_inbox: activity_pub_app.inbox_url(default_url_options)
      }
    end
  end
end
