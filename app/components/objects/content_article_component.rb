# frozen_string_literal: true

module Objects
  class ContentArticleComponent < ContentBaseComponent
    def content
      if @object.local?
        EditorjsContentValue.new(@object.content_raw)
      else
        @object.content
      end
    end
  end
end
