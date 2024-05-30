module ActivityPub
  module ActivityHandlers
    class CreateHandler < BaseHandler
      def call
        verify_signature!

        ActivityPub::RootObjectResolver.new(body.dig('object', 'id')).call
      end
    end
  end
end
