export default class Card {
  constructor(
    card,
    cardTemplate,
    { handleCardClick, handleOpenConfirmPopup, putLike, removeDislike }
  ) {
    this._name = card.name;
    this._link = card.link;
    this._likes = card.likes;
    this._idCard = card._id;
    this._idOwner = card.owner._id;
    this._myId = "096066f6008d9a1b7bd03a38";
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleOpenConfirmPopup = handleOpenConfirmPopup;
    this._putLike = putLike;
    this._removeDislike = removeDislike;
    this._cardElement = this._cardTemplate.content
      .querySelector(".element")
      .cloneNode(true);
    this._picture = this._cardElement.querySelector(".element__picture");
    this._buttonTrash = this._cardElement.querySelector(".element__trash");
    this._elementCountLike = this._cardElement.querySelector(".element__count");
    this._toggleLike = this._toggleLike.bind(this);
    this._likeButton = this._cardElement.querySelector(".element__like");
  }

  _countLikes() {
    this._elementCountLike.textContent = this._likes.length;
    const myLike = this._likes.find((like) => {
      return this._myId === like._id;
    });
    if (myLike) {
      this._likeButton.classList.add("element__like_active");
      console.log("нашел твих лайкосиков");
    }
  }

  _toggleLike() {
    const isLiked = this._likeButton.classList.contains("element__like_active");
    if (isLiked) {
      this._removeDislike(this);
    } else {
      this._putLike(this);
    }
  }

  handleLike() {
    this._likeButton.classList.add("element__like_active");
    this._elementCountLike.textContent =
      Number(this._elementCountLike.textContent) + 1;
  }

  handleDislike() {
    this._likeButton.classList.remove("element__like_active");
    this._elementCountLike.textContent =
      Number(this._elementCountLike.textContent) - 1;
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

  _deleteTrashButton() {
    if (this._myId !== this._idOwner) {
      this._buttonTrash.classList.add("element__trash_deactivate");
    }
  }

  addNewCard() {
    this._picture.src = this._link;
    this._picture.alt = this._name;
    this._cardElement.querySelector(".element__text").textContent = this._name;
    this._setEventListeners();
    this._countLikes();
    this._deleteTrashButton();
    return this._cardElement;
  }
}
