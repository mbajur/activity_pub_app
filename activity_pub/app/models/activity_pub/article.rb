module ActivityPub
  class Article < ActivityPub::Object
    class DataType
      include StoreModel::Model

      attribute :name, :string
      attribute :content, :string
      attribute :url, :string
      attribute :published_at, :datetime
      attribute :source, ActivityPub::SourceType.to_type, default: -> { {} }
    end

    attribute :data, DataType.to_type

    def source_content_serialized
      @source_content_serialized ||= JSON.parse(data.source.content.presence || {})
    end

    def content
      local? ? RenderEditorjs.render(data.source.content) : super
    end

    def content_images
      source_content_serialized['blocks'].select { |block| block['type'] == 'image' }.map do |block|
        block.dig('data', 'file')
      end
    end
  end
end
