module Objects
  class RepliesPreviewComponent < ViewComponent::Base
    attr_reader :object, :loaded

    def initialize(object, loaded: false)
      @object = object
      @loaded = loaded
      super
    end
  end
end
