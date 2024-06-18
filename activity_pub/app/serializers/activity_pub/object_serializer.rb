module ActivityPub
  class ObjectSerializer < BaseSerializer
    class NoSerializerDefinedError < StandardError; end

    def self.new(object)
      serializer = case object
                   #  when Ap::Page then PageSerializer
                   when ActivityPub::Person then PersonSerializer
                   when ActivityPub::Note then NoteSerializer
                   #  when Ap::Note then NoteSerializer
                   #  when Ap::Document then DocumentSerializer
                   else raise NoSerializerDefinedError, "No serializer found for type #{object.class}"
                   end

      serializer.new(object)
    end
  end
end
