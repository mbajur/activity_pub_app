module ActivityPub
  class InboxController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      head :ok
    end
  end
end
