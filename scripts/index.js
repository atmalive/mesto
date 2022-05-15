const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup_type_info");
const popupMesto = document.querySelector(".popup_type_mesto");
const popupImg = document.querySelector(".popup_type_img");
const inputInfoName = document.querySelector(".popup__input_type_name");
const inputInfoJob = document.querySelector(".popup__input_type_job");
const popInputMestoName = document.querySelector(".popup__input_mesto_name");
const popInputMestoLink = document.querySelector(".popup__input_mesto_link");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const elementsContainer = document.querySelector(".elements");
const formInputsInfo = document.querySelector(".popup__inputs_type_info");
const formInputsCard = document.querySelector(".popup__inputs_type_card");
const imgInfo = popupImg.querySelector(".popup__img");
const textInfo = popupImg.querySelector(".popup__subtitle");
const elementTemplate = document.querySelector("#element-template").content;

const removeElement = (evt) => {
  evt.target.closest(".element").remove();
};

function toggleLike(evt) {
  evt.target.classList.toggle("element__like_active");
};

function addNewCard(name, link) {
  //откуда копируем
  const elementElement = elementTemplate.querySelector(".element").cloneNode(true); //Что копируем и как
  const picture = elementElement.querySelector(".element__picture");
  const buttonTrash = elementElement.querySelector(".element__trash");
  //контент внуутри, который копируем
  picture.src = link;
  picture.alt = name;
  elementElement.querySelector(".element__text").textContent = name;
  buttonTrash.addEventListener("click", removeElement);
  picture.addEventListener("click", openPopupImg);
  elementElement.querySelector(".element__like").addEventListener("click", toggleLike);
  return elementElement;
};

// Закрытие на крестик
function closePop(clPopup) {
  clPopup.classList.remove("popup_open");
}
// Закрытие на фон
function closeOpacity(popup) {
  if (event.target === event.currentTarget) {
    closePop(popup);
  }
}
// открытие popup на кнопку addbutton
function openPopup(popupElement) {
  popupElement.classList.add("popup_open");
  const popupCloseButton = popupElement.querySelector(".popup__close-button");
  popupCloseButton.addEventListener("click", () => closePop(popupElement));
  popupElement.addEventListener("click", () => closeOpacity(popupElement));
}
// открытие инпутов
function openInputInfo() {
  inputInfoName.value = profileTitle.textContent;
  inputInfoJob.value = profileSubtitle.textContent;
  openPopup(popupInfo);
}
// сохранение инпутов
function submitChange(event) {
  event.preventDefault();
  profileTitle.textContent = inputInfoName.value;
  profileSubtitle.textContent = inputInfoJob.value;
  closePop(popupInfo);
}

function submitNewCard(event) {
  event.preventDefault();
  const name = popInputMestoName.value;
  const link = popInputMestoLink.value;
  const card = addNewCard(name, link);
  elementsContainer.prepend(card);
  closePop(popupMesto);
}

function openPopupImg(evt) {
  imgInfo.src = evt.target.src;
  imgInfo.alt = evt.target.alt;
  textInfo.textContent = evt.target.alt;
  openPopup(popupImg);
}

initialCards.forEach((item) => {
  const card = addNewCard(item.name, item.link);
  elementsContainer.append(card);
});

buttonEdit.addEventListener("click", openInputInfo);
buttonAdd.addEventListener("click", () => openPopup(popupMesto));
formInputsInfo.addEventListener("submit", submitChange);
formInputsCard.addEventListener("submit", submitNewCard);
