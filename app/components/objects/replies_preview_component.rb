module Objects
  class RepliesPreviewComponent < ViewComponent::Base
    attr_reader :object, :loaded

    def initialize(object, loaded: false)
      @object = object
      @loaded = loaded
      super
    end

    def replies
      object.children.at_depth(1).order(id: :desc).limit(3)
    end
  end
end
