module Public
  class BaseSerializer
    def initialize(resource)
      @resource = resource
    end

    def to_liquid
      data.as_json
    end

    private

    attr_reader :resource
  end
end
