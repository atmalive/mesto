const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");
const popupInfo = document.querySelector(".popup_type_info");
const popupMesto = document.querySelector(".popup_type_mesto");
const popupImg = document.querySelector(".popup_type_img");
const popInputName = document.querySelector('.popup__input_type_name');
const popInputJob = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupForm = document.querySelector('.popup__inputs');
const elementsContainer = document.querySelector('.elements');

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

initialCards.forEach((item) => {

        const elementTemplate = document.querySelector('#element-template').content; //откуда копируем
        const elementElement = elementTemplate.querySelector('.element').cloneNode(true);                                                          //Что копируем и как
        const picture = elementElement.querySelector('.element__picture');
        //контент внуутри, который копируем
        picture.src = item.link;
        picture.alt = item.name;
        elementElement.querySelector('.element__text').textContent = item.name;
        elementsContainer.append(elementElement);
       
        picture.addEventListener('click',()=> openPopupImg(item));
        elementElement.querySelector('.element__like').addEventListener('click',(evt)=> {
        evt.target.classList.toggle('element__like_active');
});
});

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

function openPopupImg(item) {
        const imgInfo = popupImg.querySelector('.popup__img');
        const textInfo = popupImg.querySelector('.popup__subtitle');
        imgInfo.src = item.link;
        imgInfo.alt = item.name;
        textInfo.textContent = item.name;
        openPopAdd(popupImg)
       
}

buttonEdit.addEventListener('click', openInputInfo);
buttonAdd.addEventListener('click',()=> openPopAdd(popupMesto));
popupForm.addEventListener('submit', submitChange);


