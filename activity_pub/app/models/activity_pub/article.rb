module ActivityPub
  class Article < ActivityPub::Object
    store_accessor :data, ArticleResource.data_attributes.map(&:key)

    def content_raw_serialized
      @content_raw_serialized ||= JSON.parse(content_raw)
    end

    def content_images
      content_raw_serialized['blocks'].select { |block| block['type'] == 'image' }.map do |block|
        block.dig('data', 'file')
      end
    end
  end
end
