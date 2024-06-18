require 'rails_helper'

describe ActivityPub::ActivityHandlers::UndoFollowHandler do
  subject { instance.call }
  let(:instance) do
    ActivityPub::ActivityHandlers::UndoHandler.new(
      path: '/ap/objects/foo',
      headers: {},
      body: incoming_body
    )
  end

  let(:person) { create(:person) }
  let(:remote_actor) { create(:person, guid: 'https://remote.com/ap/foo') }
  let!(:follow) { create(:follow, source_ap_object: remote_actor, target_ap_object: person) }

  let(:incoming_body) do
    {
      'type' => 'Undo',
      'object' => {
        'type' => 'Follow',
        'actor' => "https://remote.com/ap/foo",
        'object' => "https://example.com/ap/objects/#{person.id}"
      }
    }
  end

  before do
    allow(instance).to receive(:verify_signature!).and_return(true)
  end

  it { is_expected.to be_truthy }

  it 'changes existing follow state to undoed' do
    expect { subject }.to change { follow.reload.state }.to('undoed')
  end
end
