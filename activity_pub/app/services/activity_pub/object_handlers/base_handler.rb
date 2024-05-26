module ActivityPub
  module ObjectHandlers
    class BaseHandler
      def initialize(batch:, local:, remote:)
        @batch = batch
        @local_object = local
        @remote_object = remote
      end

      def call
        raise NotImplementedError
      end

      private

      attr_reader :batch, :local_object, :remote_object
    end
  end
end
