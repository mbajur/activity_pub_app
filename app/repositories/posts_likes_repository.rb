class PostsLikesRepository
  def initialize(actor, objects)
    @actor = actor
    @objects = objects
    @likes_cache = nil
  end

  def liked?(object)
    preload_likes unless @likes_cache
    @likes_cache.include?(object.id)
  end

  private

  def preload_likes
    @likes_cache = @actor.likes
                         .joins(:target_ap_object)
                         .where(target_ap_object: { id: @objects.pluck(:id) })
                         .pluck(:target_ap_object_id)
                         .to_set
  end
end
