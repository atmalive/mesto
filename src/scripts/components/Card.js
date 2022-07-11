
export default class Card {
  constructor(name, link, cardTemplate, { handleCardClick }) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _toggleLike(evt) {
    evt.target.classList.toggle("element__like_active");
  }

  _removeCards(event) {
    event.target.closest(".element").remove();
  }

  addNewCard() {
    const cardElement = this._cardTemplate.content
      .querySelector(".element")
      .cloneNode(true);
    const picture = cardElement.querySelector(".element__picture");
    const buttonTrash = cardElement.querySelector(".element__trash");
    picture.src = this._link;
    picture.alt = this._name;
    cardElement.querySelector(".element__text").textContent = this._name;
    picture.addEventListener("click", this._handleCardClick);

    buttonTrash.addEventListener("click", this._removeCards);
    cardElement.querySelector(".element__like").addEventListener("click", this._toggleLike);
    return cardElement;
  }
}
