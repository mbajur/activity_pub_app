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
          "Date" => headers['HTTP_DATE'],
          'Content-Type' => headers['CONTENT_TYPE'],
          'Digest' => headers['HTTP_DIGEST'],
          'Signature' => headers['HTTP_SIGNATURE'],
          'Host' => headers['HTTP_HOST']
        },
        body: body,
        actor_key_id: pub_key[:id],
        actor_public_key: pub_key[:public_key_pem]
      ).call

      raise 'Invalid Signature' unless res
    end
  end
end
