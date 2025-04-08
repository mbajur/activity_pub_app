module Objects
  class ContentValueResolver
    def self.new(object)
      if object.data.source.media_type == 'application/vnd.editorjs+json'
        Objects::EditorjsContentValue.new(object.local? ? object.data.source.content : object.data.content)
      else
        Objects::PlainContentValue.new(object.local? ? object.data.source.content : object.data.content)
      end
    end
  end
end
