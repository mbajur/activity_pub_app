module Public
  class PostSerializer < BaseSerializer
    def data
      {
        'name' => resource.name,
        'path' => Rails.application.routes.url_helpers.object_path(resource),
        'content_blocks' => JSON.parse(resource.content_raw)['blocks'],
        'published_at' => resource.published_at,
        'likes_count' => resource.liked_by_count,
        'boosts_count' => resource.announced_count,
        'replies_count' => resource.children_count
      }
    end
  end
end
