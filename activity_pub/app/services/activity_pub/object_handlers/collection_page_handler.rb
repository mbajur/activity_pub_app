module ActivityPub
  module ObjectHandlers
    class CollectionPageHandler < BaseHandler
      def call
        remote_object['items'].each do |item|
          item_uri = item.is_a?(Hash) ? item['id'] : item
          ActivityPub::ObjectResolver.new(item_uri).call
        end

        # @todo find a way to not fetch all the collection pages (for example:
        #   outbox - we don't want to fetch entire outbox, just first page will
        #   do)
        next_uri = remote_object['next']
        if next_uri
          # Ap::ResolveObjectJob.perform_later(next_uri)
          ActivityPub::ObjectResolver.new(next_uri).call
        end
      end
    end
  end
end
