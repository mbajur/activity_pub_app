module ActivityPub
  class ProcessInboxActivityJob < ApplicationJob
    def perform(path:, headers: {}, body:)
      body = JSON.parse(body)
      local_actor = ActivityPub::RemoteKeyRefresher.new(body['actor']).call

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
        actor_key_id: local_actor.data.dig('public_key', 'id'),
        actor_public_key: local_actor.data.dig('public_key', 'public_key_pem')
      ).call

      raise 'Invalid Signature' unless res
    end
  end
end
