import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
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
  cardTemplate,
  formElementInfo,
  initialCards,
} from "../scripts/constants.js";
import "../pages/index.css";

const imagePopup = new PopupWithImage(".popup_type_img");

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

const formInfo = new PopupWithForm(".popup_type_info", {
  submitForms: (values) => {
    userInfo.setUserInfo(values.submitPopupName, values.submitPopupJob);
  },
});

profileEditButton.addEventListener("click", () => {
  formInfoValidation.resetForm();
  inputInfoName.value = userInfo.getUserInfo().name;
  inputInfoJob.value = userInfo.getUserInfo().description;
  formInfo.openPopup();
});

const cardForm = new PopupWithForm(".popup_type_mesto", {
  submitForms: (values) => {
    const card = createCard(values.submitCardName, values.submitCardLink);
    section.addItem(card);
  },
});

cardsAddButton.addEventListener("click", () => {
  formCardValidation.resetForm();
  cardForm.openPopup();
});

// запуск рендера карточек из базы
const section = new Section(
  {
    items: initialCards,
    renderer: (name, link) => {
      // функция запуска рендера с данными
      return createCard(name, link);
    },
  },
  elementsContainer
); // контейнер с готовыми картами

section.renderItems();

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
