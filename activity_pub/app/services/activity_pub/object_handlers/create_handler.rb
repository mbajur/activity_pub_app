module ActivityPub
  module ObjectHandlers
    class CreateHandler < BaseHandler
      def call
        # local_object.type = Ap::ObjectTypes::Person
        # local_object.data = remote_object
        # local_object.save

        # Ap::ResolveObjectJob.perform_later(remote_object['outbox'])
        # Ap::ResolveObjectJob.perform_later(remote_object.dig('object', 'id'))
        ActivityPub::ObjectResolver.new(remote_object.dig('object', 'id')).call
      end
    end
  end
end
