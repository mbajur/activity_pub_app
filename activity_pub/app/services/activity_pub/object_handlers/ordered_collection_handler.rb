module ActivityPub
  module ObjectHandlers
    class OrderedCollectionHandler < BaseHandler
      def call
        ActivityPub::ObjectResolver.new(remote_object['first']).call
      end
    end
  end
end
