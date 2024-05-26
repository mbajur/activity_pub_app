module ActivityPub
  module ObjectHandlers
    class AnnounceHandler < BaseHandler
      class HandleSuccessJob < ApplicationJob
        def perform(batch, params)
          announce_object = ActivityPub::Object.find(batch.properties[:announce_object_id])
          announced_object = ActivityPub::Object.find_by(guid: announce_object.data['object'])

          announce_object.update(announced: [announced_object])
        end
      end

      def call
        local_object.type = ActivityPub::Announce
        local_object.data = remote_object
        local_object.save

        batch = GoodJob::Batch.new
        batch.description = "Resolve #{remote_object['id']} announce"

        batch.add do
          ActivityPub::ObjectResolver.new(remote_object['object']).call
        end

        batch.enqueue(
          on_success: HandleSuccessJob,
          announce_object_id: local_object.id
        )
      end
    end
  end
end
