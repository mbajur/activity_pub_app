module ActivityPub
  module WellKnown
    class WebfingerController < ApplicationController
      before_action { response.headers['Vary'] = 'Accept' }

      def show
        @account = find_account_from_resource

        respond_to do |format|
          format.any(:json, :html) { render_response }
        end

      rescue ActiveRecord::RecordNotFound
        head 404
      end

      private

      def find_account_from_resource
        resource_user = resource_param
        username = WebfingerResourceValue.new(resource_user).username

        ActivityPub::Object.local.find_by_username!(username)
      end

      def render_response
        render json: ActivityPub::WebfingerSerializer.new(@account),
               serializer: ActivityPub::WebfingerSerializer,
               content_type: 'application/jrd+json'
      end

      def resource_param
        params.require(:resource)
      end
    end
  end
end
