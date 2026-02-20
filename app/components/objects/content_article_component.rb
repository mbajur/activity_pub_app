# frozen_string_literal: true

module Objects
  class ContentArticleComponent < ContentBaseComponent
    def content
      Objects::ContentValueResolver.new(@object)
    end
  end
end
