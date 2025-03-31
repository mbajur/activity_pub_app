module ActivityPub
  class ArticleSerializer < BaseSerializer
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

      resource.fields.each do |field|
        result[field.key] = resource.field_value(field.key)
      end

      result[:content_raw] = JSON.parse(object.content_raw) if object.content_raw.present?
      result[:content] = RenderEditorjs.render(object.content_raw) if object.content_raw.present?

      result
    end

    private

    def resource
      @resource ||= ObjectResource.new(object)
    end

    def author_resource
      @author_resource ||= ObjectResource.new(object.attributed_to.first)
    end
  end
end
