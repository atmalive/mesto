import { openPopup } from './popup.js';

const popupImg = document.querySelector(".popup_type_img");
const imgInfo = popupImg.querySelector(".popup__img");
const textInfo = popupImg.querySelector(".popup__subtitle");

export class Card {

    constructor(name, link, selector) { // приняли дату
      this._name = name;
      this._link = link;
      this._selector = selector;
    }
    
    addNewCard() {
      const clonedElement = this._selector.cloneNode(true);
      const picture = clonedElement.querySelector(".element__picture");
      const buttonTrash = clonedElement.querySelector(".element__trash");
      //контент внуутри, который копируем
      picture.src = this._link;
      picture.alt = this._name;
      clonedElement.querySelector(".element__text").textContent = this._name;
      buttonTrash.addEventListener("click", this._removeElement);
      picture.addEventListener("click",() => this._openPopupImg());
      clonedElement.querySelector(".element__like").addEventListener("click", this._toggleLike);
      return clonedElement;
    }
  
    _removeElement(evt) {
      evt.target.closest(".element").remove();
    };
    
    _toggleLike(evt) {
      evt.target.classList.toggle("element__like_active");
    }
  
    _openPopupImg() {
      imgInfo.src = this._link;
      imgInfo.alt = this._name;
      textInfo.textContent = this._name;
      openPopup(popupImg);
    }
  }

  