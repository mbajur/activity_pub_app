module ActivityPub
  class ObjectDataSanitizer
    def initialize(data)
      @data = data
    end

    def call
      @data.deep_transform_keys(&:underscore)
    end
  end
end
