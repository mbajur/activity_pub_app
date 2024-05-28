module ActivityPub
  module WellKnown
    class HostMetaController < ApplicationController
      def show
        tpl = <<~HEREDOC
          <?xml version="1.0" encoding="UTF-8"?>
          <XRD xmlns="http://docs.oasis-open.org/ns/xri/xrd-1.0">
            <Link rel="lrdd" template="#{main_app.webfinger_url}?resource={uri}"/>
          </XRD>
        HEREDOC

        render plain: tpl, status: :ok, content_type: 'application/xrd+xml'
      end
    end
  end
end
