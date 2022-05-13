"use strict";

const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup_type_info");
const popupMesto = document.querySelector(".popup_type_mesto");
const popupImg = document.querySelector(".popup_type_img");
const popInputName = document.querySelector('.popup__input_type_name');
const popInputJob = document.querySelector('.popup__input_type_job');
const popInputMestoName = document.querySelector('.popup__input_mesto_name');
const popInputMestoLink = document.querySelector('.popup__input_mesto_link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__inputs');
const elementsContainer = document.querySelector('.elements');
const formInputsCard = document.querySelector('.popup__inputs_type_card');

const initialCards = [
        {
          name: 'Архыз',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
        },
        {
          name: 'Челябинская область',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
        },
        {
          name: 'Иваново',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
        },
        {
          name: 'Камчатка',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
        },
        {
          name: 'Холмогорский район',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
        },
        {
          name: 'Байкал',
          link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
        }
      ];

const removeElement = (evt) => {
        evt.target.closest('.element').remove();
}

function addNewTemplate(name, link) {
        const elementTemplate = document.querySelector('#element-template').content; //откуда копируем
        const elementElement = elementTemplate.querySelector('.element').cloneNode(true);                                                          //Что копируем и как
        const picture = elementElement.querySelector('.element__picture');
        const buttonTrash = elementElement.querySelector('.element__trash');
        //контент внуутри, который копируем
        picture.src = link;
        picture.alt = name;
        elementElement.querySelector('.element__text').textContent = name;
        buttonTrash.addEventListener('click', removeElement);
        picture.addEventListener('click', openPopupImg);
        elementElement.querySelector('.element__like').addEventListener('click',(evt)=> {
        evt.target.classList.toggle('element__like_active');
});
      return elementElement
};

// Закрытие на крестик
function ClosePop(clPopup) {
        clPopup.classList.remove('popup_open');
}
// Закрытие на фон
function CloseOpacity(popup) {
        if (event.target === event.currentTarget) {
            ClosePop(popup);
        }
   }
// открытие popup на кнопку addbutton
function openPopAdd(openPopupAll) {
        openPopupAll.classList.add('popup_open');
        const popupCloseButton = openPopupAll.querySelector(".popup__close-button");
        popupCloseButton.addEventListener('click',()=> ClosePop(openPopupAll));
        openPopupAll.addEventListener('click',()=> CloseOpacity( openPopupAll));
}
// открытие инпутов
function openInputInfo() {
        popInputName.value = profileTitle.textContent;
        popInputJob.value = profileSubtitle.textContent;
        openPopAdd(popupInfo);
}
// сохранение инпутов
function submitChange(event) {
    event.preventDefault();
    profileTitle.textContent = popInputName.value;
    profileSubtitle.textContent = popInputJob.value;
    ClosePop(popupInfo);
}

function submitNewCard(event) {
    event.preventDefault();
    const name = popInputMestoName.value;
    const link = popInputMestoLink.value;
    const card = addNewTemplate(name, link);
    elementsContainer.prepend(card);
    ClosePop(popupMesto)
}

function openPopupImg(evt) {
        const imgInfo = popupImg.querySelector('.popup__img');
        const textInfo = popupImg.querySelector('.popup__subtitle');
        imgInfo.src = evt.target.src;
        imgInfo.alt = evt.target.alt;
        textInfo.textContent = evt.target.alt;
        openPopAdd(popupImg);
}

initialCards.forEach((item) => {
  const card = addNewTemplate(item.name, item.link);
  elementsContainer.append(card);
});

buttonEdit.addEventListener('click', openInputInfo);
buttonAdd.addEventListener('click',()=> openPopAdd(popupMesto));
popupForm.addEventListener('submit', submitChange);
formInputsCard.addEventListener('submit', submitNewCard);