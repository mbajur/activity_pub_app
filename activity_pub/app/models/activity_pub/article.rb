module ActivityPub
  class Article < ActivityPub::Object
    store_accessor :data, ArticleResource.data_attributes.map(&:key)
  end
end
