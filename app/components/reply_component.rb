class ReplyComponent < ViewComponent::Base
  def initialize(reply)
    @reply = reply
    @author = reply.attributed_to.first
    super
  end

  def author_decorated
    AuthorDecorator.new(author)
  end

  private

  attr_reader :reply, :author
end
