import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForms }) {
    super(popupSelector);
    this._submitForms = submitForms;
    this._submitForms = this._submitForms.bind(this);
    this._form = this._popup.querySelector(".popup__inputs");
    this._values = this._popup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._inputLists = {};
    this._values.forEach((input) => {
      this._inputLists[input.name] = input.value;
    });
    return this._inputLists;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      // console.log(values)
      this._submitForms(values);
      this.closePopup();
    });
  }

  _resetInputs() {
    this._form.reset();
  }

  closePopup() {
    super.closePopup();
    this._resetInputs();
  }
}
