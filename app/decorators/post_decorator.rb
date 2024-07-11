class PostDecorator < SimpleDelegator
  def class
    __getobj__.class
  end

  def initialize(resource)
    @resource = resource
  end

  def content
    if resource.local?
      renderer = RenderEditorjs::DefaultRenderer.new
      RenderEditorjs::Document.new(resource.content_raw, renderer).render
    else
      super
    end
  end

  def excerpt
    ActionController::Base.helpers.strip_tags(content)
  end

  def thumbnail_url
    nokogiri_html_string = Nokogiri::HTML(content)
    image_tag = nokogiri_html_string.css('img').first

    return unless image_tag
    image_tag['src']
  end

  private

  attr_reader :resource
end
