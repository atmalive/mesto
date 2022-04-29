const buttonEdit = document.querySelector(".profile__edit-button");
const form = document.querySelector(".form");
const pageOpacity = document.querySelector(".page");
const formCloseButton = document.querySelector(".form__close-button");



function openClosePop() {
    event.preventDefault();
    if (form.classList.contains('form_opened')) {
        form.classList.remove('form_opened');
        pageOpacity.classList.remove('page_opacity');
    } else {
        form.classList.add('form_opened');
        pageOpacity.classList.add('page_opacity');
    }
}

buttonEdit.addEventListener('click', openClosePop);
formCloseButton.addEventListener('click', openClosePop);