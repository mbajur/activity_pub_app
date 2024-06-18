require 'rails_helper'

describe ActivityPub::ActivityHandlers::UndoLikeHandler do
  subject { instance.call }
  let(:instance) do
    ActivityPub::ActivityHandlers::UndoHandler.new(
      path: '/ap/objects/foo',
      headers: {},
      body: incoming_body
    )
  end

  let(:note) { create(:note) }
  let(:remote_actor) { create(:person, guid: 'https://remote.com/ap/foo') }
  let!(:like) { create(:like, source_ap_object: remote_actor, target_ap_object: note) }

  let(:incoming_body) do
    {
      'type' => 'Undo',
      'object' => {
        'type' => 'Like',
        'actor' => "https://remote.com/ap/foo",
        'object' => "https://example.com/ap/objects/#{note.id}"
      }
    }
  end

  before do
    allow(instance).to receive(:verify_signature!).and_return(true)
  end

  it { is_expected.to be_truthy }

  it 'destroys existing like' do
    expect { subject }.to change { note.likes.count }.by(-1)
  end
end
