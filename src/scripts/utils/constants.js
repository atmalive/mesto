const validSettings = {
  formSelector: ".popup__inputs",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_border-error",
  errorClass: "popup__input-error_active",
};

const avatarAddButton = document.querySelector(".profile__avatar")
const profileEditButton = document.querySelector(".profile__edit-button");
const cardsAddButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formElementInfo = document.querySelector(".popup__inputs_type_info");
const inputInfoName = formElementInfo.querySelector(".popup__input_type_name");
const inputInfoJob = formElementInfo.querySelector(".popup__input_type_job");
const formElementCard = document.querySelector(".popup__inputs_type_card");
const formPopupAvatar = document.querySelector(".popup__inputs_type_avatar");
const cardTemplate = document.querySelector("#element-template");
const elementsContainer = document.querySelector(".elements");
const buttonAvatar = formPopupAvatar.querySelector(".popup__button")
const buttonInfo = formElementInfo.querySelector(".popup__button");
const buttonCard = formElementCard.querySelector(".popup__button");


export {
  avatarAddButton,
  profileEditButton,
  cardsAddButton,
  profileTitle,
  profileSubtitle,
  formElementInfo,
  inputInfoName,
  inputInfoJob,
  formElementCard,
  cardTemplate,
  elementsContainer,
  validSettings,
  formPopupAvatar,
  buttonInfo,
  buttonCard,
  buttonAvatar
};
