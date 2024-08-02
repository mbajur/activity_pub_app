module Panel
  class ActorsController < PanelController
    def follow
      Accounts::Follower.run(actor: current_site.activity_pub_object, target: find_account)

      render turbo_stream: turbo_stream.replace(
        helpers.dom_id(find_account, :follow_btn),
        Actors::FollowBtnComponent.new(actor: current_site.activity_pub_object, target_actor: find_account)
      )
    end

    def unfollow
      Accounts::Unfollower.run(actor: current_site.activity_pub_object, target: find_account)

      render turbo_stream: turbo_stream.replace(
        helpers.dom_id(find_account, :follow_btn),
        Actors::FollowBtnComponent.new(actor: current_site.activity_pub_object, target_actor: find_account)
      )
    end

    private

    def find_account
      @find_account ||= ActivityPub::Object.find(params[:id])
    end
  end
end
