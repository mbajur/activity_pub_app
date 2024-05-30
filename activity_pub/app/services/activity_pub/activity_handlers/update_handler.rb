module ActivityPub
  module ActivityHandlers
    class UpdateHandler < BaseHandler
      def call
        verify_signature!

        ActivityPub::RootObjectResolver.new(
          body.dig('object', 'id'), shallow: true, skip_if_fresh: false
        ).call
      end
    end
  end
end
