module ActivityPub
  class HttpClient
    def initialize(actor)
      @actor = actor
    end

    def get(url)
      client.get url
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
        connection.response :json

        connection.use Faraday::Response::RaiseError
      end
    end
  end
end
