module ActivityPub
  module ObjectHandlers
    class OrderedCollectionHandler < BaseHandler
      def call
        # @todo we probably want to normalize the colleciton first to prevent
        # us from these ifs and elses.
        if remote_object['first']
          ActivityPub::ObjectResolver.new(remote_object['first']).call
        end
      end
    end
  end
end
