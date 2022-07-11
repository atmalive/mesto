import { imgInfo, textInfo, popupImg } from "../constants.js";
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._popupSelector = popupSelector;
    }
 
        openPopup(name, src) {
            super.openPopup();
            imgInfo.src = src;
            textInfo.alt = name;
            textInfo.textContent = name;
        }
    }