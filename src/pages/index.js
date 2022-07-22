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
  validSettings,
  formPopupAvatar,
  buttonInfo,
  buttonCard,
  buttonAvatar,
} from "../scripts/utils/constants.js";
import "../pages/index.css";
import PopupConfirm from "../scripts/components/PopupConfirm";

const imagePopup = new PopupWithImage(".popup_type_img");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-45",
  headers: {
    authorization: "e4a8a8c0-6a92-49e4-8795-7abdf4044053",
    "Content-Type": "application/json",
  },
});

function renderLoading(isLoading, submitButton, finalText = "Создать") {
  console.log(submitButton);
  if (isLoading) {
    submitButton.textContent = "Сохранение...";
  } else {
    submitButton.textContent = finalText;
  }
}

// renderLoading(true, buttonCard);

// .finally(() => {
//   renderLoading(false, buttonCard, "Создать");
// });

function createCard(card) {
  const newCard = new Card(card, cardTemplate, {
    handleCardClick: () => imagePopup.openPopup(card.name, card.link),
    handleOpenConfirmPopup: (cardItem) => {
      confirmRemoveCard.openPopup();
      confirmRemoveCard.handleSubmit(() => {
        api
          .deleteCard(cardItem._idCard)
          .then(() => {
            cardItem.removeCards();
          })
          .catch((err) => console.log(err));
      });
    },
    putLike: (card) => {
      api
        .setLike(card._idCard)
        .then(() => {
          card.handleLike();
        })
        .catch((err) => console.log(err));
    },
    removeDislike: (card) => {
      api
        .deleteLike(card._idCard)
        .then(() => {
          card.handleDislike();
        })
        .catch((err) => console.log(err));
    },
  });

  const cardElement = newCard.addNewCard();
  return cardElement;
}

const userInfo = new UserInfo({
  infoName: profileTitle,
  infoJob: profileSubtitle,
});

api
  .getUserInfo()
  .then(({ name, about, avatar }) => {
    userInfo.setUserInfo(name, about);
    avatarAddButton.style.backgroundImage = `url(${avatar})`;
  })
  .catch((err) => console.log(err));

const formInfo = new PopupWithForm(".popup_type_info", {
  submitForms: (values) => {
    renderLoading(true, buttonInfo, "Сохранить");
    api
      .updateUserInfo(values.submitPopupName, values.submitPopupJob)
      .then((data) => {
        userInfo.setUserInfo(data.name, data.about);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, buttonInfo, "Сохранить");
      });
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
    renderLoading(true, buttonCard);
    api
      .addCard(values.submitCardName, values.submitCardLink)
      .then((data) => {
        const card = createCard(data);
        section.addItem(card);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, buttonCard, "Создать");
      });
  },
});

cardsAddButton.addEventListener("click", () => {
  formCardValidation.resetForm();
  cardForm.openPopup();
});

const formAvatar = new PopupWithForm(".popup_type_avatar", {
  submitForms: (values) => {
    renderLoading(true, buttonAvatar, "Сохранить");
    api
      .updateAvatar(values.submitAvatarLink)
      .then((data) => {
        avatarAddButton.style.backgroundImage = `url(${data.avatar})`;
      })
      .catch((err) => console.log(err))
      .finally(() => {
        renderLoading(false, buttonAvatar, "Сохранить");
      });
  },
});

avatarAddButton.addEventListener("click", () => {
  formAvatarValidation.resetForm();
  formAvatar.openPopup();
});

const confirmRemoveCard = new PopupConfirm(".popup_type_confirm");

const section = new Section(
  {
    renderer: (card) => {
      return createCard(card);
    },
  },
  elementsContainer
);

api
  .getInitialCards()
  .then((data) => {
    section.renderItems(data);
  })
  .catch((err) => console.log(err));

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

// const data = api.getUserInfo();

// console.log(data);
