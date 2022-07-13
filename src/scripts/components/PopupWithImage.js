import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._textInfo = this._popup.querySelector(".popup__subtitle");
    this._imgInfo = this._popup.querySelector(".popup__img");
  }

  openPopup(name, src) {
    super.openPopup();
    this._imgInfo.src = src;
    this._imgInfo.alt = name;
    this._textInfo.textContent = name;
  }
}