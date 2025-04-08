module Public
  class SiteSerializer < BaseSerializer
    def data
      ap_object = resource.activity_pub_object

      {
        'name' => ap_object.data.name,
        'summary' => ap_object.data.summary,
        'avatar' => { 'url' => resource.avatar_url }
      }
    end
  end
end
