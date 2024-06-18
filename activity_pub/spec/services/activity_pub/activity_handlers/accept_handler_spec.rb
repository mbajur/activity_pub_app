require 'rails_helper'

describe ActivityPub::ActivityHandlers::AcceptHandler do
  subject { instance.call }
  let(:instance) { described_class.new(path: '/ap/objects/foo', headers: {}, body: incoming_body) }

  let(:person) { create(:person) }
  let(:remote_actor) { create(:person, guid: 'https://remote.com/ap/foo') }
  let!(:follow) { create(:follow, source_ap_object: remote_actor, target_ap_object: person) }

  let(:incoming_body) do
    {
      'type' => 'Accept',
      'object' => {
        'type' => 'Follow',
        'actor' => 'https://remote.com/ap/foo',
        'id' => "https://example.com/ap/objects/#{person.id}"
      },
      'published' => Time.current,
      to: ['https://remote.com/ap/inbox'],
      actor: "https://example.com/ap/objects/#{person.id}"
    }
  end

  before do
    allow(instance).to receive(:verify_signature!).and_return(true)
  end

  it { is_expected.to be_truthy }

  it 'changes follow status to confirmed' do
    expect { subject }.to change { follow.reload.state }.to('confirmed')
  end
end
