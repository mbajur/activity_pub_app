module FaradayMiddleware
  class RailsApiOutboundLogger < ::Faraday::Middleware
    def call(env)
      request = Net::HTTP::Post.new(env.url)
      request.body = env.body

      env.request_headers.each do |key, val|
        request[key] = val
      end

      log = OutboundRequestLog.from_request(request)
      @app.call(env).tap do |response|
        log.response_code = response.status
        log.response_body = response.env.response_body
      end
    rescue => e
      log.response_body = { error: e.message }
      raise
    ensure
      log.ended_at = Time.current
      log.save!
    end
  end
end
