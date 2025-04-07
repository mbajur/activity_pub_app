module Objects
  class ContentValueResolver
    def self.new(object)
      if object.content_mime_type == 'application/vnd.editorjs+json'
        Objects::EditorjsContentValue.new(object.local? ? object.content_raw : object.content)
      else
        Objects::PlainContentValue.new(object.local? ? object.content_raw : object.content)
      end
    end
  end
end
