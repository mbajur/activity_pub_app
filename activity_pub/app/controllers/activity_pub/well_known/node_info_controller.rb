module ActivityPub
  module WellKnown
    class NodeInfoController < ApplicationController
      def show
        json = {
          links: [
            {
              rel: 'http://nodeinfo.diaspora.software/ns/schema/2.0',
              href: main_app.node_info_v20_url
            }
          ]
        }

        render json: json, status: :ok
      end

      def v20
        json = {
          metadata: {
            nodeName: 'activitypub-rails',
            software: {
              homepage: 'https://github.com/mbajur/activity_pub_app',
              repo: 'https://github.com/mbajur/activity_pub_app'
            }
          },
          software: {
            name: 'activitypub-rails',
            version: ActivityPub::VERSION
          },
          version: '2.0',
          openRegistrations: false
        }
        render json: json, status: :ok
      end
    end
  end
end
