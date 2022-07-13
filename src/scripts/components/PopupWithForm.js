import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForms }) {
    super(popupSelector);
    this._submitForms = submitForms;
    this._submitForms = this._submitForms.bind(this);
    this._form = this._popup.querySelector(".popup__inputs");
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
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
