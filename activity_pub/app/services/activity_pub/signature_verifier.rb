module ActivityPub
  class SignatureVerifier
    def initialize(path:, headers: {}, body:, actor_key_id:, actor_public_key:)
      @path = path
      @headers = headers
      @body = body
      @actor_key_id = actor_key_id
      @actor_public_key = actor_public_key
    end

    def call
      context = HttpSignatures::Context.new(
        keys: { actor_key_id => { public_key: actor_public_key } },
        algorithm: 'rsa-sha256',
        headers: headers,
      )

      message = Net::HTTP::Post.new(
        path,
        "Date" => headers['Date'],
        'Content-Type' => headers['Content-Type'],
        'Digest' => headers['Digest'],
        'Signature' => headers['Signature'],
        'Host' => headers['Host']
      )
      message.body = body

      context.verifier.valid?(message)
    end

    private

    attr_reader :path, :headers, :body, :actor_key_id, :actor_public_key
  end
end
