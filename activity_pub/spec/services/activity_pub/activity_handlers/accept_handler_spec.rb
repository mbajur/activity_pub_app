require 'rails_helper'

describe ActivityPub::ActivityHandlers::AcceptHandler do
  subject { instance.call }
  let(:instance) { described_class.new(path: '/ap/objects/foo', headers: {}, body: incoming_body) }

  let(:person) { create(:person) }

  let(:incoming_body) do
    {
      'type' => 'Accept',
      'object' => {
        'type' => 'Follow',
        'actor' => 'https://remote.com/ap/foo',
        'object' => "https://example.com/ap/#{person.id}"
      },
      'published' => Time.current,
      to: ['https://remote.com/ap/inbox'],
      actor: "https://example.com/ap/#{person.id}"
    }
  end

  before do
    allow(instance).to receive(:verify_signature!).and_return(true)
  end

  it { is_expected.to be_truthy }
end
