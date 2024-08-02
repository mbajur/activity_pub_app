import { Controller } from "@hotwired/stimulus"
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Image from '@editorjs/image';
import Gallery from '@kiberpro/editorjs-gallery';
import Sortable from 'sortablejs';

export default class extends Controller {
  static targets = ['editor', 'input']
  connect() {
    this.editor = new EditorJS({
      holder: this.editorTarget,
      onChange: this.handleChange.bind(this),
      data: JSON.parse(this.inputTarget.value || '{}'),
      placeholder: 'Add your first content block...',
      tools: {
        header: Header,
        list: List,
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
        image: {
          class: Image,
          config: {
            endpoints: {
              byFile: '/panel/uploads'
            },
            additionalRequestHeaders: {
              'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']")['content']
            },
            field: 'upload[file]'
          }
        }
      },
    });
  }

  handleChange() {
    this.editor.save().then((outputData) => {
      this.inputTarget.value = JSON.stringify(outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }
}
