export class FormValidator {

         constructor(settings, classForm) {
            this._settings = settings;
            this._classForm = classForm;
    }

    _showInputError(formElement, inputElement, errorMessage) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._settings.errorClass);
      };
      
      _hideInputError(formElement, inputElement) {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._settings.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(this._settings.errorClass);
      };
          
      _checkInputValidity(formElement, inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(formElement, inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(formElement, inputElement);
        }
      };
            
      _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          }); 
        };
      
      _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this._settings.inactiveButtonClass);
            buttonElement.setAttribute("disabled", "disabled");
          } else {
            buttonElement.classList.remove(this._settings.inactiveButtonClass);
            buttonElement.removeAttribute("disabled");
          } 
        };
            
      _setEventListeners(formElement) {
        //Создаем массив из инпутов
        const inputList = Array.from(formElement.querySelectorAll(this._settings.inputSelector));
        const buttonElement = formElement.querySelector(this._settings.submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
        //обходим их и добавляем обработчик
        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement);
                this._toggleButtonState(inputList, buttonElement);
            });
        });
      };

      enableValidation() {
         this._setEventListeners(this._classForm); 
      }
}