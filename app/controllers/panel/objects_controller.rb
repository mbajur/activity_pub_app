module Panel
  class ObjectsController < PanelController
    before_action :authenticate_user!

    OBJECT_TYPES = [
      ActivityPub::Note
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
      @object = Note.find(params[:id])
      @replies = @object.children.includes(:ap_actors).limit(5)
      @liked_object_ids = current_group.ap_likes
                                      .joins(:ap_object)
                                      .where(ap_objects: { id: @object.id })
                                      .pluck(:ap_object_id)
    end

    def new
      @ap_object = current_group.ap_objects.new
    end

    def create
      @ap_object = current_group.ap_objects.create!(
        ap_object_params.merge(
          type: 'Note',
          published_at: Time.current
        )
      )

      # activity = Ap::Activity.new(
      #   event: :create,
      #   local: true,
      #   ap_object: @ap_object,
      #   data: {
      #     object: Ap::ObjectResource.new(@ap_object).to_hash
      #   }
      # )

      # activity.save!
      # activity.ap_actors << current_group

      # Ap::DistributeActivityJob.perform_later(activity.id)

      redirect_to panel_object_path(@ap_object)
    end

    def like
      ap_object = ApObject.find(params[:id])
      Ap::Like.find_or_create_by!(ap_actor: current_group, ap_object: ap_object)
      ap_object.reload_likes_count

      respond_to do |format|
        format.turbo_stream do
          stream = turbo_stream.replace(ap_object) do
            view_context.render(
              ObjectComponent.new(ap_object, current_ap_actor:    current_group,
                                            liked_ap_object_ids: [ap_object.id])
            )
          end
          render turbo_stream: stream
        end

        format.html do
          redirect_back fallback_location: group_path(current_group)
        end
      end
    end

    def unlike
      ap_object = ApObject.find(params[:id])
      Ap::Like.find_by(ap_actor: current_group, ap_object: ap_object)&.destroy
      ap_object.reload_likes_count

      respond_to do |format|
        format.turbo_stream do
          stream = turbo_stream.replace(ap_object) do
            view_context.render(
              ObjectComponent.new(ap_object, current_ap_actor: current_group)
            )
          end
          render turbo_stream: stream
        end

        format.html do
          redirect_back fallback_location: group_path(current_group)
        end
      end
    end

    private

    def find_actor
      @find_actor ||= ApActor.find(params[:actor_id])
    end

    def current_actor
      if params[:actor_id]
        @current_actor ||= find_actor
      else
        super
      end
    end

    def ap_actors_follow_form
      params.require(:ap_actors_follow_form).permit(:username)
    end

    def ap_object_params
      params.require(:ap_object).permit(:content, ap_attachments_attributes: [:file])
    end
  end
end
