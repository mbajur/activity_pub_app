class Current < ActiveSupport::CurrentAttributes
  attribute :actor, :site, :liked_ap_object_ids, :posts_likes_repo
end
