module ActivityPub
  class HttpClient
    def initialize(actor)
      @actor = actor
    end

    def get(url)
      client.get url
    end

    def post(url, body: {})
      client.post url, body
    end

    private

    attr_reader :actor

    def client
      @client ||= Faraday.new do |connection|
        resource = ActivityPub::PersonResource.new(actor)

        if actor
          connection.request :signature, keys: {
            resource.public_key_id => { private_key: actor.private_key }
          }, algorithm: 'rsa-sha256'
        end

        connection.headers[:accept] = 'application/activity+json'
        connection.headers[:date] = Time.current.utc.httpdate
        connection.response :json, content_type: /\bjson$/

        connection.use Faraday::Response::RaiseError
        connection.use FaradayMiddleware::RailsApiOutboundLogger
      end
    end
  end
end
