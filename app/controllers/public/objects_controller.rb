module Public
  class ObjectsController < ApplicationController
    include Pagy::Backend

    def index
      headers['Content-Type'] = 'text/html'

      template = Liquid::Template.parse(current_site.template_markup)
      pagination, objects = pagy(current_site.activity_pub_object.attributions.order(created_at: :desc))

      render plain: template.render!(
        'page_type' => 'home',
        'site' => Public::SiteSerializer.new(current_site),
        'posts' => objects.map { |post| Public::PostSerializer.new(post) },
        'pagination' => Public::PaginationSerializer.new(pagination)
      )
    end

    def show
      headers['Content-Type'] = 'text/html'

      template = Liquid::Template.parse(current_site.template_markup)
      post = current_site.activity_pub_object.attributions.find(params[:id])
      post_resource = ActivityPub::ObjectResource.new(post)

      render plain: template.render!(
        'page_type' => 'post',
        'site' => Public::SiteSerializer.new(current_site),
        'post' => Public::PostSerializer.new(post),
        'activity_pub' => {
          'guid' => post_resource.guid
        }
      )
    end
  end
end
