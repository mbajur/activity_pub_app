module Objects
  class PlainContentValue < String
    include ActionView::Helpers::SanitizeHelper

    def sanitized
      sanitize(self)
    end

    def excerpt
      doc = Nokogiri::HTML.fragment(html)
      doc.text
    end

    def thumbnail
      nil
    end
  end
end
