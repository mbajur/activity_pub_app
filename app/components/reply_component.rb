class ReplyComponent < ViewComponent::Base
  def initialize(reply)
    @reply = reply
    @ap_actor = reply.ap_actors.first
    @ap_actor_decorator = Ap::ActorDecorator.new(@ap_actor)
    super
  end

  private

  attr_reader :reply, :ap_actor_decorator
end
