// app/javascript/controllers/alert_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.alert = new bootstrap.Alert(this.element);
  }

  dismiss() {
    this.alert.close();
  }
}
