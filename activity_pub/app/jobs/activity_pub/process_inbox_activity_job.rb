module ActivityPub
  class ProcessInboxActivityJob < ApplicationJob
    def perform(path:, headers: {}, body:)
      actor = ActivityPub::RemoteKeyRefresher.new(body[:actor]).call

      res = ActivityPub::SignatureVerifier.new(
        path: path,
        headers: {
          "Date" => headers['Date'],
          'Content-Type' => headers['Content-Type'],
          'Digest' => headers['Digest'],
          'Signature' => headers['Signature'],
          'Host' => headers['Host']
        },
        body: body,
        actor_key_id: actor.data.dig('publicKey', 'id'),
        actor_public_key: actor.public_key
      ).call

      raise 'Invalid Signature' unless res
    end
  end
end
