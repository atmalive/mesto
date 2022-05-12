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

buttonEdit.addEventListener('click', openInputInfo);
buttonAdd.addEventListener('click',()=> openPopAdd(popupMesto));
popupForm.addEventListener('submit', submitChange);



const elementCard = document.querySelector('.element');

elementCard.querySelector('.element__like').addEventListener('click',(evt)=> {
        evt.target.classList.toggle('element__like_active');
});


// const songElement = songTemplate.querySelector('.song').cloneNode(true);

// songElement.querySelector('.song__artist').textContent = artistValue;
// songElement.querySelector('.song__title').textContent = titleValue;
// songsContainer.append(songElement)
// songElement.querySelector('.song__like').addEventListener('click', function (evt) {
// evt.target.classList.toggle('song__like_active');