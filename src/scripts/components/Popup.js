export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleCloseEscape = this._handleCloseEscape.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this._handleCloseOpacity = this._handleCloseOpacity.bind(this);
  }

  setEventListeners() {
    const closeButton = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    closeButton.addEventListener("click", this.closePopup);
    this._popupSelector.addEventListener("mousedown", this._handleCloseOpacity);
    document.addEventListener("keydown", this._handleCloseEscape);
  }

  closePopup() {
    this._popupSelector.classList.remove("popup_open");
  }

  openPopup() {
    this._popupSelector.classList.add("popup_open");
  }

  _handleCloseEscape(evt) {
    if (evt.key === "Escape") {
      const popup = document.querySelector(".popup_open");
      this.closePopup(popup);
    }
  }

  _handleCloseOpacity(event) {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close-button")
    ) {
      this.closePopup();
    }
  }
}
