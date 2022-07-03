// закрытие
function closePopup(popup) {
    popup.classList.remove("popup_open");
    popup.removeEventListener("click", handleCloseOpacity);
    document.removeEventListener("keydown", handleCloseEscape);
  }
  // Закрытие на фон
  function handleCloseOpacity(event) {
    if (
      event.target === event.currentTarget ||
      event.target.classList.contains("popup__close-button")
    ) {
      closePopup(event.currentTarget);
    }
  }
  
  const handleCloseEscape = (evt) => {
    if (evt.key === 'Escape') {
      const popup = document.querySelector(".popup_open");
      closePopup(popup);
    }
  };
// открытие popup на кнопку addbutton
 function openPopup(popupElement) {
    popupElement.classList.add("popup_open");
    popupElement.addEventListener("mousedown", handleCloseOpacity);
    document.addEventListener("keydown", handleCloseEscape);
  }

  export {openPopup, closePopup};