import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector)
        this._confirmButton = this._popup.querySelector('.popup__button')
    }

    handleSubmit(submit) {
        this._submit = submit;
    }

    setEventListeners() {
        super.setEventListeners();
        this._confirmButton.addEventListener("click", () => {
            this._submit()
            this.closePopup();
        });
    }
}