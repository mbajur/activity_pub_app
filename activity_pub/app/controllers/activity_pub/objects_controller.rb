module ActivityPub
  class ObjectsController < ApplicationController
    def show
      render json: ObjectSerializer.new(find_object),
             with_context: true,
             content_type: 'application/activity+json'
    end

    private

    def find_object
      ActivityPub::Object.local.find(params[:id])
    end
  end
end
