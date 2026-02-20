class AuthorDecorator < BaseDecorator
  def domain
    URI.parse(resource.guid).host
  end

  def display_username(simple: false)
    parts = []
    parts << '@' unless simple

    if resource.local?
      parts << resource.data.preferred_username
    else
      parts << "#{resource.data.preferred_username}@#{domain}"
    end

    parts.join
  end

  def avatar_url
    if resource.local?
      resource.activity_pubable.avatar_url
    else
      resource.data.icon.url
    end
  end
end
