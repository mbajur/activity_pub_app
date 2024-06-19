# ActivityPub on Rails

> [!WARNING]
> This repo is in early alpha stages of development and there is a lot of mess and commented code. Consider it a draft.

Aim of this project is to be able to add ActivityPub features to existing or new
Ruby on Rails projects. It's in early stage of development and it consists of
three major elements so far:

- `/activity_pub` - an actual Rails engine holding all the framework logic; will
  be extracted into a separate repository once completed
- `/activity_pub_ui` - user interface engine for the `activity_pub` engine,
  let's you actually see what's going on with the federation
- `/` - Umbrella Rails app that mounts two engines mentioned above and acts as
  a fake AP-enabled app

### How to deploy

In order to deploy it, I'm using [Kamal](https://kamal-deploy.org/) so all the common steps related to Kamal deploy applies in here. Kamal uses Docker internally though so you should be able to deploy it without Kamal if you want to. Dockerfile is there.

As I'm using Kamal, anything I write in here will use Kamal commands and syntax. They are simple enough you should be able to easily translate them to whatever you're using to deploy the app.

#### Basic kamal steps to deploy the instance:

Please have in mind you should modify `config/deploy.yml` and `config/initializers/activity_pub.rb` files first before running any of the commands below.

```console
$ gem install kamal
$ kamal setup
$ kamal deploy
```

### First steps

Once the instance is running, open a rails console

```console
$ kamal app exec -i --reuse bash
$ bundle exec rails c
```

and create your first actor to be able to interact with the fediverse:

```ruby
person = ActivityPub::Person.create!(name: 'Admin', preferred_username: 'admin')
```

It might be a good idea to also create a `Note` object so you have something to play with:

```ruby
note = ActivityPub::Note.create!(content: 'Sample content')
note.attributed_to << person
```

Having these two records in place should let you connect with the fediverse! Head to `Examples` section in order to see what you can do with these.

Their public URLs to use in, say, Mastodon UI will be:

```ruby
# Person URI:
"https://instance-domain.com/ap/objects/#{person.id}"

# Note URI:
"https://instance-domain.com/ap/objects/#{note.id}"
```

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

### Troubleshooting

In order to see what's going on, you have couple of options available:

- `/ap_ui/objects` - holds a list of all the AP objects, both local and remote
- `/ap_ui/inbound_request_logs` - all the incoming AP requests
- `/ap_ui/outbound_request_logs` - all the outgoing AP requests
- `/good_job` - async jobs interface, powered by [good_job](https://github.com/bensheldon/good_job)
- `/exception_hunter` - exception catcher; consider it a poor man's Sentry

When working on that all, i personally host a single-user mastodon instance with verbose logging so i can see what Mastodon is whining about in cause of any issues with federation

### Contributing

This repo is in very alpha stage and we don't have any sort of good practives or rules on how to work with things. Feel free to open a discussion thread and suggest anything that comes to your mind!
