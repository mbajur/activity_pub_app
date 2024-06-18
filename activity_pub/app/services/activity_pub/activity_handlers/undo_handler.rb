module ActivityPub
  module ActivityHandlers
    class UndoHandler < BaseHandler
      class UnsupportedUndoActivityType < StandardError; end

      def call
        verify_signature!

        handler_klass(body.dig('object', 'type'))
          .new(path: path, headers: headers, body: body)
          .call
      end

      private

      def handler_klass(type)
        klass = {
          'Follow' => ActivityPub::ActivityHandlers::UndoFollowHandler,
          'Like' => ActivityPub::ActivityHandlers::UndoLikeHandler,
        }[type.capitalize]

        raise UnsupportedUndoActivityType, "Unsupported undo activity type: #{type}" unless klass

        klass
      end
    end
  end
end
