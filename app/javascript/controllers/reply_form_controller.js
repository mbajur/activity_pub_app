import Tribute from 'https://cdn.jsdelivr.net/npm/tributejs@5.1.3/+esm'
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["content"];

  connect() {
    this.tribute = new Tribute({
      values: [
        { name: "Mike Bajur", value: "mbajur" },
        { name: "Gordon Ramsey", value: "gramsey@mastodon.social" }
      ],
      lookup: 'name',
      menuItemTemplate: function (item) {
        return item.original.name + '<br/>' + item.original.value;
      },
    })

    this.tribute.attach(this.contentTarget);
  }
}
