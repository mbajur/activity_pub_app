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
        @objects = @objects.joins(:attributed_to)
                           .where(attributed_tos_activity_pub_objects: { id: @actor.id })
      else
        @objects = @objects.left_joins(:attributed_to)
                           .where(attributed_tos_activity_pub_objects: { id: current_site.activity_pub_object.following.map(&:id).push(current_site.activity_pub_object.id).uniq })
        @objects = @objects
      end

      @objects = @objects.order('created_at DESC, activity_pub_objects.id')
                         .limit(25)
      @liked_object_ids = current_site.activity_pub_object
                                      .likes
                                      .joins(:target_ap_object)
                                      .where(target_ap_object: { id: @objects.map(&:id) })
                                      .pluck(:target_ap_object_id)
    end

    def show
      @object = ActivityPub::Object.find(params[:id])
      @comments = ActivityPub::Object.descendants_of(@object)
                                     .includes(:attributed_to)
      @liked_comment_ids = current_site.activity_pub_object
                                       .likes.joins(:target_ap_object)
                                       .where(target_ap_object: { id: @comments.map(&:id) })
                                       .pluck(:target_ap_object_id)
      @liked_object_ids = current_site.activity_pub_object
                                      .likes
                                      .joins(:target_ap_object)
                                      .where(target_ap_object: { id: @object.id })
                                      .pluck(:target_ap_object_id)
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

    def like
      @ap_object = ActivityPub::Object.find(params[:id])
      @like = Objects::Liker.run(actor: current_site.activity_pub_object, target: @ap_object).like

      respond_to do |format|
        format.turbo_stream
        format.html { redirect_back fallback_location: panel_objects_path }
      end
    end

    def unlike
      @ap_object = ActivityPub::Object.find(params[:id])
      Objects::Unliker.run(actor: current_site.activity_pub_object, target: @ap_object)

      respond_to do |format|
        format.turbo_stream
        format.html { redirect_back fallback_location: panel_objects_path }
      end
    end

    private

    def find_actor
      @find_actor ||= ActivityPub::Object.find(params[:actor_id])
    end

    def ap_object_params
      params.require(:ap_object).permit(:content_raw, :name)
    end
  end
end
