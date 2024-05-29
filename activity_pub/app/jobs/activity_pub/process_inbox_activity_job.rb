module ActivityPub
  class ProcessInboxActivityJob < ApplicationJob
    def perform(path:, headers: {}, body:)
      body = JSON.parse(body)
      actor = ActivityPub::RemoteKeyRefresher.new(body['actor']).call
      actor_resource = ActivityPub::PersonResource.new(actor)
      pub_key = actor_resource.field_value(:public_key)

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
        actor_key_id: pub_key[:id],
        actor_public_key: pub_key[:public_key_pem]
      ).call

      raise 'Invalid Signature' unless res
    end
  end
end
