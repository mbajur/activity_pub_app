module ActivityPub
  class InboxController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      Rails.logger.info "Raw body: #{request.body.read}"
      head :created
    end
  end
end
