module Panel
  class CommentsController < PanelController
    before_action :authenticate_user!

    def like
      @ap_object = ActivityPub::Note.find(params[:id])
      @like = Objects::Liker.run(actor: current_site.activity_pub_object, target: @ap_object).like

      respond_to do |format|
        format.turbo_stream
        format.html { redirect_back fallback_location: panel_comment_path(@ap_object) }
      end
    end

    def unlike
      @ap_object = ActivityPub::Note.find(params[:id])
      Objects::Unliker.run(actor: current_site.activity_pub_object, target: @ap_object)
      @ap_object.reload

      respond_to do |format|
        format.turbo_stream
        format.html { redirect_back fallback_location: panel_comment_path(@ap_object) }
      end
    end

    private

    def find_actor
      @find_actor ||= ActivityPub::Object.find(params[:actor_id])
    end
  end
end
