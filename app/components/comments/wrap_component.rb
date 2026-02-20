module Comments
  class HeaderComponent < ViewComponent::Base
    attr_reader :comment

    def initialize(comment)
      @comment = comment
      super
    end

    def author
      @author ||= comment.attributed_to[0]
    end

    def author_decorated
      @author_decorated ||= AuthorDecorator.new(author)
    end
  end

  class BodyComponent < ViewComponent::Base
    attr_reader :comment

    def initialize(comment)
      @comment = comment
      super
    end
  end

  class FooterComponent < ViewComponent::Base
    attr_reader :comment

    def initialize(comment)
      @comment = comment
      super
    end

    def liked_comment_ids
      []
    end
  end

  class WrapComponent < ViewComponent::Base
    renders_one :header, -> do
      Comments::HeaderComponent.new(comment: @comment, replies: @replies)
    end

    renders_one :body, -> do
      Comments::BodyComponent.new(comment: @comment, replies: @replies)
    end

    renders_one :footer, -> do
      Comments::FooterComponent.new(comment: @comment, replies: @replies)
    end

    def initialize(comment:, replies: [])
      @comment = comment
      @replies = replies
      super
    end
  end
end
