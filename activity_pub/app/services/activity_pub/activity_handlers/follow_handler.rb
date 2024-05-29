module ActivityPub
  module ActivityHandlers
    class FollowHandler < BaseHandler
      def call
        raise NotImplementedError, 'Follow activity is not yet implemented!'
      end
    end
  end
end
