class SiteAvatarUploader < Shrine
  plugin :default_url

  Attacher.default_url do |**options|
    "/#{name}/missing.jpg"
  end
end
