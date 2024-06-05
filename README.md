### Examples

#### Person profile update distribution

    actor = ActivityPub::Person.local.first
    activity = ActivityPub::UpdateSerializer.new(actor, with_context: true, actor: actor)
    ActivityPub::HttpClient.new(actor).post('https://mastodon.social/inbox', body: activity.to_json)

#### Accepting a remote follow distribution

    follow = ActivityPub::Follow.last
    actor = follow.target_ap_object
    activity = ActivityPub::AcceptSerializer.new(follow, with_context: true)
    ActivityPub::HttpClient.new(actor).post('https://mastodon.social/inbox', body: activity.to_json)
