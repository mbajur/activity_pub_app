module ActivityPub
  class WebfingerSerializer < BaseSerializer
    def data
      {
        subject: object.to_webfinger_s,
        links: links
      }
    end

    def links
      [
        { rel: 'self', type: 'application/activity+json', href: activity_pub_app.object_url(object) }
      ]
    end

    # def aliases
    #   [account_url(object.username)]
    # end

    # def links
    #   [
    #     { rel: 'http://webfinger.net/rel/profile-page', type: 'text/html', href: account_url(object.username) },
    #     { rel: 'http://schemas.google.com/g/2010#updates-from', type: 'application/atom+xml', href: recent_stories_account_url(object.username, format: 'atom') },
    #     { rel: 'self', type: 'application/activity+json', href: recent_stories_account_url(object.username) },
    #     { rel: 'salmon', href: api_salmon_url(object.id) },
    #     { rel: 'magic-public-key', href: "data:application/magic-public-key,#{object.magic_key}" },
    #     # { rel: 'http://ostatus.org/schema/1.0/subscribe', template: "#{authorize_follow_url}?acct={uri}" },
    #   ]
    # end
  end
end
