module ActivityPub
  module ObjectHandlers
    class NoteHandler < BaseHandler
      def call
        local_object.type = ActivityPub::Note
        local_object.data = remote_object
        local_object.save
      end
    end
  end
end
