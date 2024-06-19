require 'rails_helper'

describe ActivityPub::ActivityHandlers::FollowHandler do
  subject { instance.call }
  let(:instance) { described_class.new(path: '/ap/objects/foo', headers: {}, body: incoming_body) }

  let(:person) { create(:person) }

  let(:incoming_body) do
    {
      'type' => 'Follow',
      'object' => "https://example.com/ap/objects/#{person.id}",
      'actor' => 'https://remote.com/ap/objects/foo'
    }
  end

  before do
    allow(instance).to receive(:verify_signature!).and_return(true)

    body = {
      id: 'https://remote.com/ap/objects/foo',
      type: 'Person',
      inbox: 'https://remote.com/ap/objects/foo/inbox'
    }
    stub_request(:get, 'https://remote.com/ap/objects/foo')
      .to_return(status: 200, body: body.to_json, headers: { 'Content-Type' => 'application/json' })
  end

  it { is_expected.to be_truthy }

  context 'when manually_approves_followers is enabled' do
    before do
      person.update!(manually_approves_followers: true)
    end

    it 'creates a ActivityPub::Follow record in pending state' do
      expect { subject }.to change { ActivityPub::Follow.pending.count }.by(1)
    end
  end

  context 'when manually_approves_followers is disabled' do
    before do
      person.update!(manually_approves_followers: false)
    end

    it 'creates a ActivityPub::Follow record in confirmed state' do
      expect { subject }.to change(ActivityPub::Follow.confirmed, :count).by(1)
    end
  end
end
