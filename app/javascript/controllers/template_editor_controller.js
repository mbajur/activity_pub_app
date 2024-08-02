import { Controller } from "@hotwired/stimulus"
import { basicSetup, EditorView } from "codemirror"
import { liquid } from "@codemirror/lang-liquid"

export default class extends Controller {
  static targets = ['editor', 'input']

  static values = {
    doc: String
  }

  connect() {
    this.editor = new EditorView({
      doc: this.docValue,
      extensions: [
        basicSetup,
        liquid(),
        EditorView.updateListener.of((view) => {
          if (view.docChanged) { this.sync() }
        })
      ],
      parent: this.editorTarget
    })
  }

  disconnect() {
    this.editor.destroy()
  }

  sync() {
    this.inputTarget.value = this.editor.state.doc.toString()
  }
}
