module ActivityPub
  module ObjectHandlers
    class UnknownHandler < BaseHandler
      def call
        local_object.type = ActivityPub::Unknown
        local_object.data = remote_object
        local_object.save

        Rails.logger.warn "Unknown object type #{remote_object['type']}, skipping"
      end
    end
  end
end
