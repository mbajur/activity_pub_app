import EditorjsNoteBase from './editorjs_note_base';

export default class extends EditorjsNoteBase {
  get tools() {
    return {}
  }

  get defaultData() {
    return {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'paragraph',
        },
      ],
      version: '2.22.2'
    }
  }
}
