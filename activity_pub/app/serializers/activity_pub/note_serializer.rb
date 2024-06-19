module ActivityPub
  class NoteSerializer < BaseSerializer
    def data
      result = {
        id:   resource.local_guid,
        type: resource.object_type,
        url:  resource.public_url,
        published: object.created_at.iso8601,
        updated: object.updated_at.iso8601,
        attributed_to: author_resource.guid,
        to: ['https://www.w3.org/ns/activitystreams#Public'],
        cc: [author_resource.followers_url],
        sensitive: false,
      }

      if object.in_reply_to
        result[:in_reply_to] = in_reply_to_resource.guid
      end

      resource.fields.each do |field|
        result[field.key] = resource.field_value(field.key)
      end

      result
    end

    private

    def resource
      @resource ||= ObjectResource.new(object)
    end

    def author_resource
      @author_resource ||= ObjectResource.new(object.attributed_to.first)
    end

    def in_reply_to_resource
      @in_reply_to_resource ||= ObjectResource.new(object.in_reply_to)
    end
  end
end
