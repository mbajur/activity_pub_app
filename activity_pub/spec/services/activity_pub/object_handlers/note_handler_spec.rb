require 'rails_helper'

describe ActivityPub::ObjectHandlers::NoteHandler do
  subject { instance.call }
  let(:instance) { described_class.new(local: local_object, remote: incoming_body) }

  let(:local_object) { ActivityPub::Object.new }
  let!(:remote_actor) { create(:person, guid: 'https://remote.com/ap/foo') }

  let(:incoming_body) do
    {
      'type' => 'Note',
      'content' => "<p>foo</p>",
      'url' => 'https://example.com/ap/objects/foo',
      'actor' => 'https://remote.com/ap/foo'
    }
  end

  it { is_expected.to be_truthy }

  it 'creates a ActivityPub::Note record' do
    expect { subject }.to change { ActivityPub::Note.count }.by(1)
  end

  it 'persists raw data' do
    subject
    ap_object = ActivityPub::Note.last

    expect(ap_object.data.content).to eq('<p>foo</p>')
  end
end
