module ActivityPub
  class UriToLocalObjectIdFinder
    def initialize(uri)
      @uri = uri
    end

    def call
      params = Rails.application.routes.recognize_path(@uri)
      # @todo validate host
      params[:id]
    end
  end
end
