export default class FormValidator {
  constructor(form, validSettings) {
    
    this._form = form;
    this._validSettings = validSettings;
    this._buttonElement = this._form.querySelector(this._validSettings.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._validSettings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validSettings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._validSettings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._validSettings.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputElement) {
    return inputElement.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._validSettings.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "disabled");
    } else {
      this._buttonElement.classList.remove(this._validSettings.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }

 

  _setEventListeners() {
    //Создаем массив из инпутов
   this._inputLists = Array.from(this._form.querySelectorAll(this._validSettings.inputSelector));
    this._toggleButtonState(this._inputLists);
    //обходим их и добавляем обработчик
    this._inputLists.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputLists);
      });
    });
  }

  resetForm() {
    this._inputLists.forEach((input) => {
      this._hideInputError(input);
      
    });
    this._buttonElement.classList.add(this._validSettings.inactiveButtonClass);
    this._buttonElement.setAttribute("disabled", "disabled");
  }

  enableValidation() {
    this._setEventListeners();
  }
}