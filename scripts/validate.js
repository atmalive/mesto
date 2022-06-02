const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    console.log(inputElement)
    inputElement.classList.add('popup__input_border-error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_border-error');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');
  };


const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      }); 
    }

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_inactive');
      } else {
        buttonElement.classList.remove('popup__button_inactive');
      } 
    };


const setEventListeners = (formElement) => {
    //Создаем массив из инпутов
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    //обходим их и добавляем обработчик
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement)
            toggleButtonState(inputList, buttonElement);
        });
    });
};


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__inputs'));
      formList.forEach((formElement) => {
          setEventListeners(formElement);
      });
}
enableValidation();