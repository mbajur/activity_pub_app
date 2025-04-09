module ActivityPub
  module ObjectHandlers
    class NoteHandler < BaseHandler
      TYPE = ActivityPub::Note

      def call
        local_object = @local_object.becomes(TYPE)
        local_object.type = TYPE
        local_object.data = remote_object
        local_object.save
      end
    end
  end
end
