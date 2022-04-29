const buttonEdit = document.querySelector(".profile__edit-button");
const form = document.querySelector(".form");
const formCloseButton = document.querySelector(".form__close-button");
const nameInput = document.querySelector('.form__input-name');
const whoInput = document.querySelector('.form__input-who');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const submitButton = document.querySelector('.form__button');

function openPop() {
    event.preventDefault();
        nameInput.value = profileTitle.textContent;
        whoInput.value = profileSubtitle.textContent;
        form.classList.add('form_opened');
}

function ClosePop() {
    event.preventDefault();
        form.classList.remove('form_opened');
}

function CloseOpacity() {
    if (event.target === event.currentTarget) {
        ClosePop();
    }
}

function submitChange() {
    event.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = whoInput.value;
    ClosePop();
}

buttonEdit.addEventListener('click', openPop);
formCloseButton.addEventListener('click', ClosePop);
form.addEventListener('click', CloseOpacity);
submitButton.addEventListener('click', submitChange);