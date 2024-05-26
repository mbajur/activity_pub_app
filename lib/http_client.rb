class HttpClient
  class ApMiddleware < Faraday::Middleware
    class SignatureBuilder
      def initialize(env, key_id:, keypair:)
        @headers = env[:request_headers]
        @key_id = key_id
        @keypair = keypair
      end

      def call
        algorithm = 'rsa-sha256'
        headers = headers
        signature = Base64.strict_encode64(keypair.sign(OpenSSL::Digest.new('SHA256'), signed_string))

        "keyId=\"#{key_id}\",algorithm=\"#{algorithm}\",headers=\"#{signed_headers.keys.join(' ').downcase}\",signature=\"#{signature}\""
      end

      private

      attr_reader :headers, :key_id, :keypair

      def signed_string
        signed_headers.map { |key, value| "#{key.downcase}: #{value}" }.join("\n")
      end

      def signed_headers
        @headers.without('User-Agent', 'Accept-Encoding')
      end
    end

    def on_request(env)
      env[:request_headers].merge!(
        'Host' => env[:url].host,
        'Digest' => "SHA-256=#{Digest::SHA256.base64digest('')}"
      )

      env[:request_headers].merge!(
        'Signature' => SignatureBuilder.new(env, keypair: options[:keypair], key_id: Groups::UrlHelper.new(options[:actor]).ap_actor_url(anchor: 'main-key')
      ).call)
    end
  end

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
      connection.headers[:accept] = 'application/activity+json'
      connection.headers[:date] = Time.current.utc.httpdate
      connection.response :json

      connection.use Faraday::Response::RaiseError
      # connection.use ApMiddleware, actor: actor,
      #                              keypair: OpenSSL::PKey::RSA.new(actor.private_key || actor.public_key)
    end
  end
end
