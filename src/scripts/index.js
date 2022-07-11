import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopupWithForm.js";
import UserInfo from "./components/UserInfo.js";
import {
  inputInfoName,
  inputInfoJob,
  inputCardName,
  inputCardLink,
  profileTitle,
  profileSubtitle,
  elementsContainer,
  cardsAddButton,
  profileEditButton,
  formElementCard,
  popupMesto,
  popupInfo,
  cardTemplate,
  formElementInfo,
  initialCards,
  popupImg,
} from "./constants.js";
import '../pages/index.css';

const imagePopup = new PopupWithImage(popupImg);

function createCard(name, link) {
  const card = new Card(name, link, cardTemplate, {
    handleCardClick: () => imagePopup.openPopup(name, link),
  });
  const cardElement = card.addNewCard();
  return cardElement;
}

const userInfo = new UserInfo({
  infoName: profileTitle,
  infoJob: profileSubtitle,
});

const formInfo = new PopupWithForm(popupInfo, {
  submitForms: () => {
    userInfo.setUserInfo(inputInfoName.value, inputInfoJob.value);
  },
});

profileEditButton.addEventListener("click", () => {
  formInfoValidation.resetInputs();
  inputInfoName.value = userInfo.getUserInfo().name;
  inputInfoJob.value = userInfo.getUserInfo().description;
  formInfo.openPopup();
});

const cardForm = new PopupWithForm(popupMesto, {
  submitForms: () => {
    const newCardName = inputCardName.value;
    const newCardLink = inputCardLink.value;
    const card = createCard(newCardName, newCardLink);
    section.addItem(card);
  },
});

cardsAddButton.addEventListener("click", () => {
  formCardValidation.resetInputs();
  cardForm.openPopup();
});

// запуск рендера карточек из базы
const section = new Section(
  {
    items: initialCards, //  копия класса Section, которая рендерит секцию с карточками
    renderer: (name, link) => {
      // функция запуска рендера с данными
      return createCard(name, link);
    },
  },
  elementsContainer
); // контейнер с готовыми картами

section.renderItems(); // запуск функции из класса Section, где мы бежим по массиву карточек

const validSettings = {
  formSelector: ".popup__inputs",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_border-error",
  errorClass: "popup__input-error_active",
};

const formCardValidation = new FormValidator(formElementCard, validSettings);
const formInfoValidation = new FormValidator(formElementInfo, validSettings);
formCardValidation.enableValidation();
formInfoValidation.enableValidation();

imagePopup.setEventListeners();
formInfo.setEventListeners();
cardForm.setEventListeners();