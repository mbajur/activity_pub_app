import EditorjsNoteBase from './editorjs_note_base';
import Gallery from '@kiberpro/editorjs-gallery';
import Sortable from 'sortablejs';

export default class extends EditorjsNoteBase {
  get tools() {
    return {
      gallery: {
        class: Gallery,
        config: {
          sortableJs: Sortable,
          endpoints: {
            byFile: '/panel/uploads'
          },
          additionalRequestHeaders: {
            'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']")['content']
          },
          field: 'upload[file]'
        }
      },
    }
  }

  get defaultData() {
    return {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'gallery',
        },
      ],
      version: '2.22.2'
    }
  }
}
