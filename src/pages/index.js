import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
  inputInfoName,
  inputInfoJob,
  profileTitle,
  profileSubtitle,
  elementsContainer,
  cardsAddButton,
  profileEditButton,
  formElementCard,
  cardTemplate,
  formElementInfo,
  initialCards,
  validSettings
} from "../scripts/utils/constants.js";
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
  const {name, description} = userInfo.getUserInfo();
  inputInfoName.value = name;
  inputInfoJob.value = description;
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

const formCardValidation = new FormValidator(formElementCard, validSettings);
const formInfoValidation = new FormValidator(formElementInfo, validSettings);
formCardValidation.enableValidation();
formInfoValidation.enableValidation();

imagePopup.setEventListeners();
formInfo.setEventListeners();
cardForm.setEventListeners();
