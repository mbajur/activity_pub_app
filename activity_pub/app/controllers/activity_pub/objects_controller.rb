module ActivityPub
  class ObjectsController < ApplicationController
    def show
      attach_inbound_request_loggable(find_object)

      render json: ObjectSerializer.new(find_object),
             with_context: true,
             content_type: 'application/activity+json'
    end

    def activity
      attach_inbound_request_loggable(find_object)

      render json: UpdateSerializer.new(find_object, actor: find_object),
             with_context: true,
             content_type: 'application/activity+json'
    end

    private

    def find_object
      @find_object ||= ActivityPub::Object.local.find(params[:id])
    end
  end
end
