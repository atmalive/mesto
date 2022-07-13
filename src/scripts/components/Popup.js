export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.closePopup = this.closePopup.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._closeButton = this._popup.querySelector(".popup__close-button");
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", this.closePopup);
    this._popup.addEventListener("mousedown", this._handleClose);
  }

  closePopup() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleClose);
  }

  openPopup() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleClose);
  }

  _handleClose(event) {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close-button") ||
      event.key === "Escape"
    ) {
      this.closePopup();
    }
  }
}
