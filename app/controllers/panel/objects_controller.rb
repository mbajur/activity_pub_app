module Panel
  class ObjectsController < PanelController
    before_action :authenticate_user!

    OBJECT_TYPES = [
      ActivityPub::Note,
      ActivityPub::Article,
      ActivityPub::Announce,
    ]

    def index
      @objects = ActivityPub::Object.where(type: OBJECT_TYPES.map(&:name))
                                    .not_replies

      if params[:actor_id]
        @actor = find_actor
        @objects = @objects.joins(:attributed_to)
                           .where(attributed_tos_activity_pub_objects: { id: @actor.id })
      else
        followed_object_ids = current_site.activity_pub_object.following.map(&:id).push(current_site.activity_pub_object.id).uniq
        @objects = @objects.left_joins(:attributed_to)
                           .left_joins(:actors)
                           .where('attributed_tos_activity_pub_objects.id IN (?) OR actors_activity_pub_objects.id IN (?)', followed_object_ids, followed_object_ids)
        @objects = @objects
      end

      @objects = @objects.order('created_at DESC, activity_pub_objects.id')
                         .limit(25)
      Current.posts_likes_repo = PostsLikesRepository.new(current_site.activity_pub_object, @objects)
    end

    def show
      @object = ActivityPub::Object.find(params[:id])
      @comments = ActivityPub::Object.descendants_of(@object)
                                     .includes(:attributed_to)
      @liked_comment_ids = current_site.activity_pub_object
                                       .likes.joins(:target_ap_object)
                                       .where(target_ap_object: { id: @comments.map(&:id) })
                                       .pluck(:target_ap_object_id)
      Current.posts_likes_repo = PostsLikesRepository.new(current_site.activity_pub_object, [@object])
    end

    def replies_preview
      @object = ActivityPub::Object.find(params[:object_id])
      render Objects::RepliesPreviewComponent.new(@object, loaded: true)
    end

    def new_note
      @ap_object = current_site.activity_pub_object.attributions.new.becomes(ActivityPub::Note)
    end

    def new_article
      @ap_object = current_site.activity_pub_object.attributions.new.becomes(ActivityPub::Article)
    end

    def create
      @ap_object = current_site.activity_pub_object.attributions.create!(
        ap_object_params.merge(
          published_at: Time.current,
          content_mime_type: 'application/vnd.editorjs+json'
        )
      )

      actor = current_site.activity_pub_object
      activity = ActivityPub::CreateSerializer.new(@ap_object, with_context: true, actor: actor)

      actor.followers.find_each do |follower|
        ActivityPub::FederateObjectJob.perform_later(actor, follower.inbox, activity.to_json)
      end

      redirect_to panel_object_path(@ap_object)
    end

    def edit
      @ap_object = current_site.activity_pub_object.attributions.find(params[:id])
    end

    def update
      @ap_object = current_site.activity_pub_object.attributions.find(params[:id])

      if @ap_object.update(ap_object_params)
        actor = current_site.activity_pub_object
        activity = ActivityPub::UpdateSerializer.new(@ap_object, with_context: true, actor: actor)

        actor.followers.find_each do |follower|
          ActivityPub::FederateObjectJob.perform_later(actor, follower.inbox, activity.to_json)
        end

        redirect_to panel_object_path(@ap_object)
      else
        render :edit
      end
    end

    def like
      @ap_object = ActivityPub::Object.find(params[:id])
      @like = Objects::Liker.run(actor: current_site.activity_pub_object, target: @ap_object).like
      Current.posts_likes_repo = PostsLikesRepository.new(current_site.activity_pub_object, [@ap_object])

      respond_to do |format|
        format.turbo_stream
        format.html { redirect_back fallback_location: panel_objects_path }
      end
    end

    def unlike
      @ap_object = ActivityPub::Object.find(params[:id])
      Objects::Unliker.run(actor: current_site.activity_pub_object, target: @ap_object)
      @ap_object.reload

      Current.posts_likes_repo = PostsLikesRepository.new(current_site.activity_pub_object, [@ap_object])

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
      params.require(:ap_object).permit(:type, :content_raw, :name, :content, :content_attachments)
    end
  end
end
