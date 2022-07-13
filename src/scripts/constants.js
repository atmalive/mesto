const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const cardsAddButton = document.querySelector(".profile__add-button");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const formElementInfo = document.querySelector(".popup__inputs_type_info");
const inputInfoName = formElementInfo.querySelector(".popup__input_type_name");
const inputInfoJob = formElementInfo.querySelector(".popup__input_type_job");
const formElementCard = document.querySelector(".popup__inputs_type_card");
const inputCardName = formElementCard.querySelector(".popup__input_mesto_name");
const inputCardLink = formElementCard.querySelector(".popup__input_mesto_link");
const cardTemplate = document.querySelector("#element-template");
const elementsContainer = document.querySelector(".elements");

export {
  profileEditButton,
  cardsAddButton,
  profileTitle,
  profileSubtitle,
  formElementInfo,
  inputInfoName,
  inputInfoJob,
  formElementCard,
  inputCardName,
  inputCardLink,
  cardTemplate,
  elementsContainer,
  initialCards
};
