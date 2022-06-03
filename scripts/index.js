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
const elementElement = elementTemplate.querySelector(".element");

const removeElement = (evt) => {
  evt.target.closest(".element").remove();
};

function toggleLike(evt) {
  evt.target.classList.toggle("element__like_active");
}

function addNewCard(name, link) {
  const clonedElement = elementElement.cloneNode(true);
  const picture = clonedElement.querySelector(".element__picture");
  const buttonTrash = clonedElement.querySelector(".element__trash");
  //контент внуутри, который копируем
  picture.src = link;
  picture.alt = name;
  clonedElement.querySelector(".element__text").textContent = name;
  buttonTrash.addEventListener("click", removeElement);
  picture.addEventListener("click",() => openPopupImg(name, link));
  clonedElement.querySelector(".element__like").addEventListener("click", toggleLike);
  return clonedElement;
}

// закрытие
function closePopup(popup) {
  popup.classList.remove("popup_open");
  popup.removeEventListener("click", handleCloseOpacity);
  document.removeEventListener("keydown", handleCloseEscape);
}
// Закрытие на фон
function handleCloseOpacity(event) {
  if (
    event.target === event.currentTarget ||
    event.target.classList.contains("popup__close-button")
  ) {
    closePopup(event.currentTarget);
  }
}

const handleCloseEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector(".popup_open");
    closePopup(popup)
    console.log(popup)
  }
};

// открытие popup на кнопку addbutton
function openPopup(popupElement) {
  popupElement.classList.add("popup_open");
  popupElement.addEventListener("mousedown", handleCloseOpacity);
  document.addEventListener("keydown", handleCloseEscape);
}
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

function submitNewCard(event) {
  event.preventDefault();
  const card = addNewCard(popInputMestoName.value, popInputMestoLink.value);
  elementsContainer.prepend(card);
  closePopup(popupMesto);
}

function openPopupImg(name, link) {
  imgInfo.src = link;
  imgInfo.alt = name;
  textInfo.textContent = name;
  openPopup(popupImg);
}

initialCards.forEach((item) => {
  const card = addNewCard(item.name, item.link);
  elementsContainer.append(card);
});

buttonEdit.addEventListener("click", handleOpenPopupInfo);
buttonAdd.addEventListener("click", () => openPopup(popupMesto));
formInputsInfo.addEventListener("submit", submitChange);
formInputsCard.addEventListener("submit", submitNewCard);