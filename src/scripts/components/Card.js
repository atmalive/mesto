import { openPopup } from '../popup.js';
import { popupImg, imgInfo, textInfo } from '../constants.js';


export class Card {
 
  constructor(name, link, cardTemplate) { // приняли дату
      this._name = name;
      this._link = link;
      this._cardTemplate = cardTemplate;
    }
    
    createCard() {
      this._clonedCard = this._cardTemplate.cloneNode(true);
      const picture = this._clonedCard.querySelector(".element__picture");
      const buttonTrash = this._clonedCard.querySelector(".element__trash");
      //контент внуутри, который копируем
      picture.src = this._link;
      picture.alt = this._name;
      this._clonedCard.querySelector(".element__text").textContent = this._name;
      buttonTrash.addEventListener("click",() => this._removeElement());
      picture.addEventListener("click",() => this._openPopupImg());
      this._clonedCard.querySelector(".element__like").addEventListener("click", this._toggleLike);
      return this._clonedCard;
    }
   
    _removeElement() {
      this._clonedCard.remove();
      this._clonedCard = null;
    }
    
    _toggleLike(evt) {
      evt.target.classList.toggle("element__like_active");
    }
  
    _openPopupImg() {
      console.log(this._clonedCard)
      imgInfo.src = this._link;
      imgInfo.alt = this._name;
      textInfo.textContent = this._name;
      openPopup(popupImg);
    }
  }