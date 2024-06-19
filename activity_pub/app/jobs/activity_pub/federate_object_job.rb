module ActivityPub
  class FederateObjectJob < ApplicationJob
    def perform(actor, inbox, body)
      ActivityPub::HttpClient.new(actor).post(inbox, body: body)
    end
  end
end
