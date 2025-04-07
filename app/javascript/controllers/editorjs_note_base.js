import { Controller } from "@hotwired/stimulus"
import EditorJS from '@editorjs/editorjs';
import Gallery from '@kiberpro/editorjs-gallery';
import Sortable from 'sortablejs';

export default class extends Controller {
  static targets = ['editor', 'input']
  static values = {
    minHeight: Number,
    placeholder: {
      type: String,
      default: 'Add your first content block...'
    }
  }

  connect() {
    this.editor = new EditorJS({
      holder: this.editorTarget,
      minHeight: this.minHeightValue,
      onChange: this.handleChange.bind(this),
      placeholder: this.placeholderValue,
      data: this.editorjsData,
      tools: this.tools
    });
  }

  disconnect() {
    this.editor.destroy()
  }

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

  get editorjsData() {
    if(this.inputTarget.value != '') {
      return JSON.parse(this.inputTarget.value)
     } else {
      return this.defaultData
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

  handleChange() {
    this.editor.save().then((outputData) => {
      this.inputTarget.value = JSON.stringify(outputData)
    }).catch((error) => {
      console.log('Saving failed: ', error)
    });
  }
}
