module ActivityPub
  class ObjectEnsurer
    def initialize(uri)
      @uri = uri
    end

    def call
      ActivityPub::Object.create_or_find_by(guid: @uri)
    end
  end
end
