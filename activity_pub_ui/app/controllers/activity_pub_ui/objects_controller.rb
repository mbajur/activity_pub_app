module ActivityPubUi
  class ObjectsController < ApplicationController
    include Pagy::Backend

    def index
      @q = ActivityPub::Object.all.ransack(params[:q])
      @pagy, @objects = pagy(@q.result)
    end

    def show
      @object = ActivityPub::Object.find(params[:id])
      @in_reply_to = ActivityPub::Object.where(guid: [@object.data['inReplyTo']])
      @replies = ActivityPub::Object.where(guid: [@object.data['attributedTo']])
    end

    def resolve
      @object = ActivityPub::RootObjectResolver.new(params[:uri]).call
      redirect_to object_path(@object)
    end
  end
end
