module Objects
  class PlainContentValue < String
    include ActionView::Helpers::SanitizeHelper
    include ActionView::Helpers::TextHelper

    def sanitized
      sanitize(self)
    end

    def html
      simple_format(self)
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
