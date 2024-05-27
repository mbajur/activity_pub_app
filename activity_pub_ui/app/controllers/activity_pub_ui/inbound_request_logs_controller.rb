module ActivityPubUi
  class InboundRequestLogsController < ApplicationController
    include Pagy::Backend

    def index
      @q = InboundRequestLog.all.ransack(params[:q])
      @q.sorts = 'started_at desc' if @q.sorts.empty?
      @pagy, @requests = pagy(@q.result)
    end

    def show
      @request = InboundRequestLog.find(params[:id])
    end
  end
end
