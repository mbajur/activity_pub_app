### Examples

#### Person profile update distribution

    actor = ActivityPub::Person.local.first
    activity = ActivityPub::UpdateSerializer.new(actor, with_context: true, actor: actor)
    ActivityPub::HttpClient.new(actor).post('https://masto.mbajur.com/inbox', body: activity.to_json)

#### Accepting a remote follow distribution

    follow = ActivityPub::Follow.last
    actor = follow.target_ap_object
    activity = ActivityPub::AcceptSerializer.new(follow, with_context: true)
    ActivityPub::HttpClient.new(actor).post('https://masto.mbajur.com/inbox', body: activity.to_json)

#### Sending a follow request to a remote actor

    follow = ActivityPub::Follow.last
    actor = follow.source_ap_object
    target = follow.target_ap_object
    activity = ActivityPub::FollowSerializer.new(follow, with_context: true)
    ActivityPub::HttpClient.new(actor).post(target.inbox, body: activity.to_json)

#### Sending a like activity to a remote object

    target = ActivityPub::Note.last
    like = ActivityPub::Like.last
    actor = like.source_ap_object
    activity = ActivityPub::LikeSerializer.new(like, with_context: true)
    inbox_urls = target.attributed_to.map { |person| person.data.dig('endpoints', 'shared_inbox') }.compact.uniq
    inbox_urls.each do |inbox_url|
      ActivityPub::HttpClient.new(actor).post(inbox_url, body: activity.to_json)
    end

#### Note create activity distribution

    note = ActivityPub::Note.local.first
    actor = note.attributed_to.first
    activity = ActivityPub::CreateSerializer.new(note, with_context: true, actor: actor)
    ActivityPub::HttpClient.new(actor).post('https://masto.mbajur.com/inbox', body: activity.to_json)
