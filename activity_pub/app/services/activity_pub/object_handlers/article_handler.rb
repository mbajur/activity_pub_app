module ActivityPub
  module ObjectHandlers
    class ArticleHandler < BaseHandler
      TYPE = ActivityPub::Article

      def call
        local_object = @local_object.becomes(TYPE)
        local_object.type = TYPE
        local_object.data = remote_object
        local_object.save
      end
    end
  end
end
