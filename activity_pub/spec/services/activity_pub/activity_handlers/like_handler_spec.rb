require 'rails_helper'

describe ActivityPub::ActivityHandlers::LikeHandler do
  subject { instance.call }
  let(:instance) { described_class.new(path: '/ap/objects/foo', headers: {}, body: incoming_body) }

  let!(:note) { create(:note) }
  let!(:remote_actor) { create(:person, guid: 'https://remote.com/ap/foo') }

  let(:incoming_body) do
    {
      'type' => 'Like',
      'object' => "https://example.com/ap/objects/#{note.id}",
      'actor' => 'https://remote.com/ap/foo'
    }
  end

  before do
    allow(instance).to receive(:verify_signature!).and_return(true)
  end

  it { is_expected.to be_truthy }

  it 'creates a Like record' do
    expect { subject }.to change { note.likes.count }.by(1)
  end
end
