# frozen_string_literal: true

module Objects
  class ArticleBodyComponent < ViewComponent::Base
    attr_reader :object

    def initialize(object)
      @object = object
      super
    end

    def object_decorated
      @object_decorated ||= ::PostDecorator.new(object)
    end
  end
end
