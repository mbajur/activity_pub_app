module ActivityPubUi
  class OutboundRequestLogsController < ApplicationController
    include Pagy::Backend

    def index
      @q = OutboundRequestLog.all.ransack(params[:q])
      @q.sorts = 'started_at desc' if @q.sorts.empty?
      @pagy, @requests = pagy(@q.result)
    end

    def show
      @request = OutboundRequestLog.find(params[:id])
    end
  end
end
