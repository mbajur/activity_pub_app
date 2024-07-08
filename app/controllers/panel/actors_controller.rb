module Panel
  class ActorsController < PanelController
    def follow
      Ap::Follow.find_or_create_by!(
        ap_actor: current_user.ap_actor,
        target_ap_actor: find_actor
      )

      render turbo_stream: turbo_stream.replace(helpers.dom_id(find_actor, :follow_btn), Actors::FollowBtnComponent.new(actor: current_user.ap_actor, target_actor: find_actor))
    end

    def unfollow
      Ap::Follow.destroy_by(
        ap_actor: current_user.ap_actor,
        target_ap_actor: find_actor
      )

      render turbo_stream: turbo_stream.replace(helpers.dom_id(find_actor, :follow_btn), Actors::FollowBtnComponent.new(actor: current_user.ap_actor, target_actor: find_actor))
    end

    private

    def find_actor
      @find_actor ||= ApActor.find(params[:id])
    end

    # def current_actor
    #   if params[:actor_id]
    #     @current_actor ||= find_actor
    #   else
    #     super
    #   end
    # end

    # def ap_actors_follow_form
    #   params.require(:ap_actors_follow_form).permit(:username)
    # end

    # def ap_object_params
    #   params.require(:ap_object).permit(:content, ap_attachments_attributes: [:file])
    # end
  end
end
