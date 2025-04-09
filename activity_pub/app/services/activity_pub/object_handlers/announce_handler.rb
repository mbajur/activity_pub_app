module ActivityPub
  module ObjectHandlers
    class AnnounceHandler < BaseHandler
      TYPE = ActivityPub::Announce

      def call
        local_object = @local_object.becomes(TYPE)
        local_object.type = TYPE
        local_object.data = remote_object
        local_object.save

        if remote_object['actor']
          actor = ActivityPub::ObjectResolver.new(remote_object['actor']).call
          local_object.actors = [actor]
        end

        announced_object = ActivityPub::ObjectResolver.new(remote_object['object']).call
        local_object.update(announced: [announced_object])
      end
    end
  end
end
