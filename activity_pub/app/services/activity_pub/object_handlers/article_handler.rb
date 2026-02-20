module ActivityPub
  module ObjectHandlers
    class ArticleHandler < BaseHandler
      def call
        local_object.type = ActivityPub::Article
        local_object.data = remote_object
        local_object.save
      end
    end
  end
end
