module Objects
  class RepliesPreviewComponent < ViewComponent::Base
    attr_reader :object, :loaded

    def initialize(object, loaded: false)
      @object = object
      @loaded = loaded
      super
    end

    def replies
      object.replies.order(id: :desc).limit(3)
    end
  end
end
