module Public
  class PostSerializer < BaseSerializer
    def data
      {
        'name' => resource.data.try(:name),
        'path' => Rails.application.routes.url_helpers.object_path(resource),
        'content_blocks' => JSON.parse(resource.data.source.content)['blocks'],
        'published_at' => resource.data.published_at,
        'likes_count' => resource.liked_by_count,
        'boosts_count' => resource.announced_count,
        'replies_count' => resource.children_count
      }
    end
  end
end
