# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@editorjs/editorjs", to: "@editorjs--editorjs.js" # @2.29.0
pin "@editorjs/header", to: "@editorjs--header.js" # @2.8.5
pin "@editorjs/list", to: "@editorjs--list.js" # @1.9.0
pin "@editorjs/image", to: "@editorjs--image.js" # @2.9.0
pin "codemirror" # @6.0.0
pin "@codemirror/commands", to: "@codemirror--commands.js" # @6.6.0
pin "@codemirror/lint", to: "@codemirror--lint.js" # @6.8.1
pin "@codemirror/search", to: "@codemirror--search.js" # @6.5.6
pin "crelt" # @1.0.6
pin "@codemirror/lang-liquid", to: "@codemirror--lang-liquid.js" # @6.2.1
pin "@codemirror/view", to: "@codemirror--view.js" # @6.28.4
pin "@codemirror/state", to: "@codemirror--state.js" # @6.4.1
pin "style-mod" # @4.1.2
pin "w3c-keyname" # @2.2.8
pin "@codemirror/language", to: "@codemirror--language.js" # @6.10.2
pin "@lezer/common", to: "@lezer--common.js" # @1.2.1
pin "@lezer/highlight", to: "@lezer--highlight.js" # @1.2.0
pin "@codemirror/autocomplete", to: "@codemirror--autocomplete.js" # @6.17.0
pin "@codemirror/lang-css", to: "@codemirror--lang-css.js" # @6.2.1
pin "@codemirror/lang-html", to: "@codemirror--lang-html.js" # @6.4.9
pin "@codemirror/lang-javascript", to: "@codemirror--lang-javascript.js" # @6.2.2
pin "@lezer/css", to: "@lezer--css.js" # @1.1.8
pin "@lezer/html", to: "@lezer--html.js" # @1.3.10
pin "@lezer/javascript", to: "@lezer--javascript.js" # @1.4.17
pin "@lezer/lr", to: "@lezer--lr.js" # @1.4.1
pin "@kiberpro/editorjs-gallery", to: "@kiberpro--editorjs-gallery.js" # @1.3.0
pin "sortablejs" # @1.15.2
