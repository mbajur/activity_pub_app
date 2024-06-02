
module FaradayMiddleware
  class DigestHeader < Faraday::Middleware
    def on_request(env)
      if env.method == :post
        env[:request_headers]['Digest'] = "SHA-256=#{Digest::SHA256.base64digest(env[:body])}"
      end
    end
  end
end
