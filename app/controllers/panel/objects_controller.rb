module Panel
  class ObjectsController < PanelController
    before_action :authenticate_user!

    OBJECT_TYPES = [
      ActivityPub::Note,
      ActivityPub::Article,
    ]

    def index
      @objects = ActivityPub::Object.where(type: OBJECT_TYPES.map(&:name))
                                    .not_replies

      if params[:actor_id]
        @actor = find_actor
        @objects = @objects.where(ap_actors: { id: @actor.id })
      else
        # @objects = @objects.where(ap_actors: { id: current_group.following })
        #                    .or(base_scope.where(ap_actors: { id: current_group }))
        @objects = @objects
      end

      @objects = @objects
        # .select('distinct on (published_at, ap_objects.id) ap_objects.*')
        # .order('published_at DESC, ap_objects.id')
        # .limit(25)

      # @liked_object_ids = current_group.ap_likes
      #                                  .joins(:ap_object)
      #                                  .where(ap_objects: { id: @objects.map(&:id) })
      #                                  .pluck(:ap_object_id)
    end

    def show
      @object = ActivityPub::Object.find(params[:id])
      @replies = @object.replies.includes(:ap_actors).limit(5)
      # @liked_object_ids = current_group.ap_likes
      #                                 .joins(:ap_object)
      #                                 .where(ap_objects: { id: @object.id })
      #                                 .pluck(:ap_object_id)
    end

    def replies_preview
      @object = ActivityPub::Object.find(params[:object_id])
      render Objects::RepliesPreviewComponent.new(@object, loaded: true)
    end

    def new
      redirect_to new_article_panel_objects_path
    end

    def new_article
      @ap_object = current_site.activity_pub_object.attributions.new.becomes(ActivityPub::Article)
    end

    def create
      @ap_object = current_site.activity_pub_object.attributions.create!(
        ap_object_params.merge(
          type: ActivityPub::Article.name,
          published_at: Time.current
        )
      )

      redirect_to panel_object_path(@ap_object)
    end

    def edit
      @ap_object = current_site.activity_pub_object.attributions.find(params[:id])
    end

    def update
      @ap_object = current_site.activity_pub_object.attributions.find(params[:id])

      if @ap_object.update(ap_object_params)
        redirect_to panel_object_path(@ap_object)
      else
        render :edit
      end
    end

    # def like
    #   ap_object = ApObject.find(params[:id])
    #   Ap::Like.find_or_create_by!(ap_actor: current_group, ap_object: ap_object)
    #   ap_object.reload_likes_count

    #   respond_to do |format|
    #     format.turbo_stream do
    #       stream = turbo_stream.replace(ap_object) do
    #         view_context.render(
    #           ObjectComponent.new(ap_object, current_ap_actor:    current_group,
    #                                         liked_ap_object_ids: [ap_object.id])
    #         )
    #       end
    #       render turbo_stream: stream
    #     end

    #     format.html do
    #       redirect_back fallback_location: group_path(current_group)
    #     end
    #   end
    # end

    # def unlike
    #   ap_object = ApObject.find(params[:id])
    #   Ap::Like.find_by(ap_actor: current_group, ap_object: ap_object)&.destroy
    #   ap_object.reload_likes_count

    #   respond_to do |format|
    #     format.turbo_stream do
    #       stream = turbo_stream.replace(ap_object) do
    #         view_context.render(
    #           ObjectComponent.new(ap_object, current_ap_actor: current_group)
    #         )
    #       end
    #       render turbo_stream: stream
    #     end

    #     format.html do
    #       redirect_back fallback_location: group_path(current_group)
    #     end
    #   end
    # end

    private

    def find_actor
      @find_actor ||= ApActor.find(params[:actor_id])
    end

    # def ap_actors_follow_form
    #   params.require(:ap_actors_follow_form).permit(:username)
    # end

    def ap_object_params
      params.require(:ap_object).permit(:content_raw, :name)
    end
  end
end
