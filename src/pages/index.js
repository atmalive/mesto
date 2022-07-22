import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Api from "../scripts/components/api.js";
import {
  avatarAddButton,
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
  validSettings,
  formPopupAvatar,
} from "../scripts/utils/constants.js";
import "../pages/index.css";
import PopupConfirm from "../scripts/components/PopupConfirm";

const imagePopup = new PopupWithImage(".popup_type_img");

function createCard(name, link) {
  const card = new Card(name, link, cardTemplate, {
    handleCardClick: () => imagePopup.openPopup(name, link),
    handleOpenConfirmPopup: (card) => {
      confirmRemoveCard.openPopup();
      confirmRemoveCard.handleSubmit(() => {
        card.removeCards();
      });
    },
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
  const { name, description } = userInfo.getUserInfo();
  inputInfoName.value = name;
  inputInfoJob.value = description;
  formInfo.openPopup();
});

const cardForm = new PopupWithForm(".popup_type_mesto", {
  submitForms: (values) => {
    const card = createCard(values.submitCardName, values.submitCardLink);
    // section.addItem(card);
  },
});

cardsAddButton.addEventListener("click", () => {
  formCardValidation.resetForm();
  cardForm.openPopup();
});

const formAvatar = new PopupWithForm(".popup_type_avatar", {
  submitForms: (values) => {
    userInfo.setUserInfo(values.submitAvatarLink);
  },
});

avatarAddButton.addEventListener("click", () => {
  formAvatarValidation.resetForm();
  formAvatar.openPopup();
});

const confirmRemoveCard = new PopupConfirm(".popup_type_confirm");


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-45",
  headers: {
    authorization: "e4a8a8c0-6a92-49e4-8795-7abdf4044053",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then( (data) => { 
  console.log(data)
  const section = new Section(
    {
      items: data,
      renderer: (name, link) => {
        return createCard(name, link);
      },
    },
    elementsContainer
    
  ); 
  section.renderItems();
}

);





const formCardValidation = new FormValidator(formElementCard, validSettings);
const formInfoValidation = new FormValidator(formElementInfo, validSettings);
const formAvatarValidation = new FormValidator(formPopupAvatar, validSettings);
formCardValidation.enableValidation();
formInfoValidation.enableValidation();
formAvatarValidation.enableValidation();

imagePopup.setEventListeners();
formInfo.setEventListeners();
cardForm.setEventListeners();
formAvatar.setEventListeners();
confirmRemoveCard.setEventListeners();



// const data = api.getInitialCards();

// console.log(data);
