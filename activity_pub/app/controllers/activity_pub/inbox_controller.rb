module ActivityPub
  class InboxController < ActionController::API
    class RequestValidationError < StandardError; end

    before_action :validate_request

    rescue_from RequestValidationError, with: :request_validation_error

    def create
      ActivityPub::ProcessInboxActivityJob.perform_later(
        path: request.path,
        headers: request.headers.to_h.slice(*%w[HTTP_DIGEST HTTP_DATE HTTP_SIGNATURE HTTP_HOST HTTP_CONTENT_TYPE CONTENT_LENGTH]),
        body: request.body.read
      )
      head :created
    end

    private

    def validate_request
      raise RequestValidationError.new('Date header missing') unless request.headers.key?('Date')
      raise RequestValidationError.new('Content-Type header missing') unless request.headers.key?('Content-Type')
      raise RequestValidationError.new('Digest header missing') unless request.headers.key?('Digest')
      raise RequestValidationError.new('Signature header missing') unless request.headers.key?('Signature')
      raise RequestValidationError.new('Host header missing') unless request.headers.key?('Host')
    end

    def request_validation_error(error)
      render json: { error: error.message }, status: :unprocessable_entity
    end
  end
end
