import { Card } from './Card.js';
import { openPopup, closePopup } from './popup.js';
import { FormValidator } from './FormValidator.js';

const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup_type_info");
const popupMesto = document.querySelector(".popup_type_mesto");
const inputInfoName = document.querySelector(".popup__input_type_name");
const inputInfoJob = document.querySelector(".popup__input_type_job");
const popInputMestoName = document.querySelector(".popup__input_mesto_name");
const popInputMestoLink = document.querySelector(".popup__input_mesto_link");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const elementsContainer = document.querySelector(".elements");
const formInputsInfo = document.querySelector(".popup__inputs_type_info");
const formInputsCard = document.querySelector(".popup__inputs_type_card");
const elementTemplate = document.querySelector("#element-template").content;
const elementElement = elementTemplate.querySelector(".element");


// открытие инпутов
function handleOpenPopupInfo() {
  inputInfoName.value = profileTitle.textContent;
  inputInfoJob.value = profileSubtitle.textContent;
  openPopup(popupInfo);
}
// сохранение инпутов
function submitChange(event) {
  event.preventDefault();
  profileTitle.textContent = inputInfoName.value;
  profileSubtitle.textContent = inputInfoJob.value;
  closePopup(popupInfo);
}

buttonEdit.addEventListener("click", handleOpenPopupInfo);
buttonAdd.addEventListener("click", () => openPopup(popupMesto));
formInputsInfo.addEventListener("submit", submitChange);

initialCards.forEach((item) => {    // бежим по массиву
  const card = new Card(item.name, item.link, elementElement);  // создаем обьект класса карточки с передачей
  const cardElement = card.addNewCard();
  elementsContainer.append(cardElement);
});

function submitNewCard(event) {
  event.preventDefault();
  const classCard = new Card(popInputMestoName.value, popInputMestoLink.value, elementElement);
  const card = classCard.addNewCard();
  elementsContainer.prepend(card);
  closePopup(popupMesto);
}

formInputsCard.addEventListener("submit", submitNewCard);

const settings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_border-error',
  errorClass: 'popup__input-error_active'
};

const forms = document.querySelectorAll('.popup__inputs');
  forms.forEach((form) => {
    const FormValidatorClass = new FormValidator(settings, form)
    FormValidatorClass.enableValidation();
  });