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
        sensitive: false
      }

      resource.fields.each do |field|
        result[field.key] = resource.field_value(field.key)
      end

      result
    end

    private

    def resource
      @resource ||= NoteResource.new(object)
    end

    def author_resource
      @author_resource ||= PersonResource.new(object.attributed_to.first)
    end
  end
end
