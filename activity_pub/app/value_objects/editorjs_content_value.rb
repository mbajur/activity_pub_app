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
    content = self.dup.tap do |c|
      c['blocks'] = c['blocks'].filter { |b| b['type'] == 'paragraph' }
    end

    RenderEditorjs.render(content)
  end

  def thumbnail
    self['blocks'].find { |b| b['type'] == 'image' }&.dig('data', 'file')
  end
end
