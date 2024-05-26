module ActivityPub
  module ObjectHandlers
    class ServiceHandler < BaseHandler
      def call
        local_object.type = ActivityPub::Service
        local_object.data = remote_object
        local_object.save

        # Fetch outbox data only if original ResolveObjectJob was called for the
        # same actor we are trying to resolve. Typical case is when user wants
        # to resolve a remote Note object - such resolve triggers a resolve
        # for every comment on that note and for every of associated actors.
        # Fetching outboxes for all the actors involved would produce almost
        # infinite amount of jobs and we don't want that to happen.
        #
        # Instead, if original object is Actor - we resolve it's outbox.
        # Otherwise we just resolve all the associated objects and associated
        # actors but we skip their outboxes.
        if batch.properties[:uri] == local_object.guid
          ActivityPub::ObjectResolver.new(remote_object['outbox']).call
        end
      end
    end
  end
end
