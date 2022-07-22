export default class Card {
  constructor(
    name,
    link,
    cardTemplate,
    { handleCardClick, handleOpenConfirmPopup }
  ) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleOpenConfirmPopup = handleOpenConfirmPopup;
    this._cardElement = this._cardTemplate.content
      .querySelector(".element")
      .cloneNode(true);
    this._picture = this._cardElement.querySelector(".element__picture");
    this._buttonTrash = this._cardElement.querySelector(".element__trash");
  }

  _toggleLike(evt) {
    evt.target.classList.toggle("element__like_active");
  }

  removeCards() {
    this._cardElement.remove();
  }

  _setEventListeners() {
    this._picture.addEventListener("click", this._handleCardClick);
    this._buttonTrash.addEventListener("click", () =>
      this._handleOpenConfirmPopup(this)
    );
    this._cardElement
      .querySelector(".element__like")
      .addEventListener("click", this._toggleLike);
  }

  addNewCard() {
    this._picture.src = this._link;
    this._picture.alt = this._name;
    this._cardElement.querySelector(".element__text").textContent = this._name;
    this._setEventListeners();
    return this._cardElement;
  }
}
