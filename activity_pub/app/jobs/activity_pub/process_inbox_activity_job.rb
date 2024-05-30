module ActivityPub
  class ProcessInboxActivityJob < ApplicationJob
    class UnsupportedActivityType < StandardError; end

    def perform(path:, headers: {}, body:)
      body = JSON.parse(body)

      handler_klass(body['type'])
        .new(path: path, headers: headers, body: body)
        .call
    end

    private

    def handler_klass(type)
      klass = {
        'Delete' => ActivityPub::ActivityHandlers::DeleteHandler,
        'Follow' => ActivityPub::ActivityHandlers::FollowHandler,
        'Create' => ActivityPub::ActivityHandlers::CreateHandler,
        'Update' => ActivityPub::ActivityHandlers::UpdateHandler,
      }[type.capitalize]

      raise UnsupportedActivityType, "Unsupported activity type: #{type}" unless klass

      klass
    end
  end
end
