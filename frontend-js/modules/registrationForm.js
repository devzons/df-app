export default class RegistrationForm {
  constructor() {
    this.allFields = document.querySelectorAll("#registration-form .form-control")
    this.insertValidationElements()
    this.username = document.querySelector("#username-register")
    this.username.previouseValue = ""
    this.events()
  }

  // Events
  events() {
    this.username.addEventListener("keyup", () => {
      this.isDefferent(this.username, this.usernameHandler)
    })
  }

  // Methods
  isDefferent(el, handler) {
    if (el.previouseValue != el.value) {
      handler.call(this)
    }
    el.previouseValue = el.value
  }

  usernameHandler() {
    alert("just ran")
  }

  insertValidationElements() {
    this.allFields.forEach(function(el) {
      el.insertAdjacentHTML('afterend', '<div class="alert alert-danger small liveValidateMessage"></div>')
    })
  }
}