export default class FormValidator {
  constructor(form, validSettings) {
    this._form = form;
    this._validSettings = validSettings;
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

  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._validSettings.inactiveButtonClass);
      buttonElement.setAttribute("disabled", "disabled");
    } else {
      buttonElement.classList.remove(this._validSettings.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }
  }

 

  _setEventListeners() {
    //Создаем массив из инпутов
   this._inputList = Array.from(
      this._form.querySelectorAll(this._validSettings.inputSelector)
    );
    const buttonElement = this._form.querySelector(
      this._validSettings.submitButtonSelector
    );
    this._toggleButtonState(this._inputList, buttonElement);
    //обходим их и добавляем обработчик
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, buttonElement);
      });
    });
  }

  resetInputs() {
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
