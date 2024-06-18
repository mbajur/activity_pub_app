module ActivityPub
  module ActivityHandlers
    class UndoHandler < BaseHandler
      def call
        verify_signature!

        handler_klass(body.dig('object', 'type'))
          .new(path: path, headers: headers, body: body)
          .call
      end

      private

      def handler_klass(type)
        klass = {
          'Follow' => ActivityPub::ActivityHandlers::UndoFollowHandler
        }[type.capitalize]

        raise UnsupportedActivityType, "Unsupported undo activity type: #{type}" unless klass

        klass
      end
    end
  end
end
