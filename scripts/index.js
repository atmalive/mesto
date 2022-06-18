import { Card } from './Card.js';
import { openPopup, closePopup } from './popup.js';
import { FormValidator } from './FormValidator.js';
import { buttonEdit, buttonAdd, popupInfo, popupMesto, inputInfoName, inputInfoJob, popInputMestoName, popInputMestoLink, profileTitle, profileSubtitle, elementsContainer, formInputsInfo, formInputsCard, elementTemplate, elementElement } from './constants.js';


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

function createCard(name, link) {
  const card = new Card(name, link, elementElement);
  const cardElement = card.createCard();
  return cardElement;
}

initialCards.forEach((item) => {   
  const cardElement = createCard(item.name, item.link);
  elementsContainer.append(cardElement);
});

const settings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_border-error',
  errorClass: 'popup__input-error_active'
};

const validationInfo = new FormValidator(settings, formInputsInfo);
const validationCard = new FormValidator(settings, formInputsCard);
validationInfo.enableValidation();
validationCard.enableValidation();

function submitNewCard(event) {
  event.preventDefault();
  const card = createCard(popInputMestoName.value, popInputMestoLink.value);
  elementsContainer.prepend(card);
  popInputMestoName.value = '';
  popInputMestoLink.value = '';
  validationCard.resetValidation()
  closePopup(popupMesto);
}

formInputsCard.addEventListener("submit", submitNewCard);