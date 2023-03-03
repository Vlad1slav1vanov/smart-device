const openPopupButton = document.querySelector(".header__open-popup-btn");
const closePopupButton = document.querySelector(".popup__button-close");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");

const closePopup = () => {
  popup.classList.remove("popup--is-open");
  document.removeEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup();
    }
  })
}

const openPopup = () => {
  popup.classList.add("popup--is-open");
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup();
    }
  })
  document.body.style.height = "100vh";
}

const popupEvent = () => {
  openPopupButton.addEventListener("click", openPopup);
  closePopupButton.addEventListener("click", closePopup);
  popup.addEventListener("click", closePopup);
  popupWrapper.addEventListener("click", (evt) => {
    evt.stopPropagation();
  })
}

export {popupEvent};
