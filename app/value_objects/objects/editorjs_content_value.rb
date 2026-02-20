module Objects
  class EditorjsContentValue < Hash
    def initialize(content)
      super

      content = content.is_a?(String) ? JSON.parse(content) : content
      merge!(content)
    end

    def to_s
      RenderEditorjs.render(self)
    end

    def excerpt
      html = RenderEditorjs.render(self)
      doc = Nokogiri::HTML.fragment(html)
      doc.text
    end

    def thumbnail
      self['blocks'].find { |b| b['type'] == 'image' }&.dig('data', 'file')
    end
  end
end
