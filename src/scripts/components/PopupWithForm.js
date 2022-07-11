import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {

    constructor(popupSelector, { submitForms }) {
      
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._submitForms = submitForms;
        this._submitForms = this._submitForms.bind(this);
        this._form = this._popupSelector.querySelector('.popup__inputs');
    }

    _getInputValues() {
        const values = this._popupSelector.querySelectorAll('.popup__input');
        this._inputLists = {};
        values.forEach(input => {
            this._inputLists[input.name] = input.value;
        });
        return this._inputLists;
    }
    
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => { 
          evt.preventDefault();
          this._submitForms();
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