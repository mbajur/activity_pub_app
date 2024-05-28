module ActivityPub
  class InboxController < ApplicationController
    def create
      head :ok
    end
  end
end
