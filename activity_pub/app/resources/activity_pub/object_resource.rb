module ActivityPub
  class ObjectResource
    class NoResourceDefinedError < StandardError; end

    # @todo move that to gem config
    def self.new(object)
      object = object.ensure_type
      resource = case object
                 when ActivityPub::Person then PersonResource
                 when ActivityPub::Group then GroupResource
                 when ActivityPub::Note then NoteResource
                 when ActivityPub::Article then ArticleResource
                 else raise NoResourceDefinedError, "No resource found for type #{object.class}"
                 end

      resource.new(object)
    end
  end
end
