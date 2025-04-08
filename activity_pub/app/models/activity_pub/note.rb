module ActivityPub
  class Note < ActivityPub::Object
    class DataType
      include StoreModel::Model

      attribute :content, :string
      attribute :url, :string
      attribute :published_at, :string
      attribute :source, ActivityPub::SourceType.to_type, default: -> { {} }
      attribute :attachment, ActivityPub::AttachmentType.to_array_type
    end

    attribute :data, DataType.to_type

    attr_accessor :content_attachments
    attr_accessor :content_text

    def content
      local? ? RenderEditorjs.render(data.source.content) : super
    end

    def content_text
      source = data.source.presence || ActivityPub::SourceType.new(
        content: {
          time: Time.current.to_i,
          blocks: [],
          version: '2.29.0'
        }.to_json,
        media_type: 'application/vnd.editorjs+json'
      )

      JSON.parse(source.content).tap do |content|
        content['blocks'] = content['blocks'].filter { |b| b['type'] == 'paragraph' }
      end
    end

    def content_attachments
      source = data.source.presence || ActivityPub::SourceType.new(
        content: {
          time: Time.current.to_i,
          blocks: [{ type: 'gallery' }],
          version: '2.29.0'
        }.to_json,
        media_type: 'application/vnd.editorjs+json'
      )

      JSON.parse(source.content).tap do |content|
        content['blocks'] = content['blocks'].filter { |b| b['type'] == 'gallery' }
      end
    end
  end
end
