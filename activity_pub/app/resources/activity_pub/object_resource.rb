module ActivityPub
  class ObjectResource
    class NoResourceDefinedError < StandardError; end

    def self.new(object)
      object = object.ensure_type
      resource = case object
                 when ActivityPub::Person then PersonResource
                 when ActivityPub::Note then NoteResource
                 else raise NoResourceDefinedError, "No resource found for type #{object.class}"
                 end

      resource.new(object)
    end
  end
end
