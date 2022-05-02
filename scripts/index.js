const buttonEdit = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
const popInputName = document.querySelector('.popup__input_type_name');
const popInputJob = document.querySelector('.popup__input_type_job');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openPop() {
        popInputName.value = profileTitle.textContent;
        popInputJob.value = profileSubtitle.textContent;
        popup.classList.add('popup_open');
}

function ClosePop() {
        popup.classList.remove('popup_open');
}

// function CloseOpacity() {
//     if (event.target === event.currentTarget) {
//         ClosePop();
//     }
// }

function submitChange(event) {
    event.preventDefault();
    profileTitle.textContent = popInputName.value;
    profileSubtitle.textContent = popInputJob.value;
    ClosePop();
}

buttonEdit.addEventListener('click', openPop);
popupCloseButton.addEventListener('click', ClosePop);
// form.addEventListener('click', CloseOpacity);
popup.addEventListener('submit', submitChange);