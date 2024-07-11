module Public
  class SiteSerializer < BaseSerializer
    def data
      ap_object = resource.activity_pub_object

      {
        'name' => ap_object.name,
        'summary' => ap_object.summary,
        'avatar' => { 'url' => resource.avatar_url }
      }
    end
  end
end
