const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(settings.errorClass);
  };
  
const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(settings.errorClass);
  };


const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
        hideInputError(formElement, inputElement, settings);
    }
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      }); 
    }

const toggleButtonState = (inputList, buttonElement, settings) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass);
        buttonElement.setAttribute("disabled", "disabled");
      } else {
        buttonElement.classList.remove(settings.inactiveButtonClass);
        buttonElement.removeAttribute("disabled");
      } 
    };


const setEventListeners = (formElement, settings) => {
    //Создаем массив из инпутов
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, settings);
    //обходим их и добавляем обработчик
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, settings)
            toggleButtonState(inputList, buttonElement, settings);
        });
    });
};


const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
      formList.forEach((formElement) => {
          setEventListeners(formElement, settings);
      });
}

enableValidation({
    formSelector: '.popup__inputs',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_border-error',
    errorClass: 'popup__input-error_active'
  }); 