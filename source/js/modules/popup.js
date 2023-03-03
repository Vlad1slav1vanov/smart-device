const openPopupButton = document.querySelector(".header__open-popup-btn");
const closePopupButton = document.querySelector(".popup__button-close");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");

const body = document.querySelector('body');
const elementsToHide = body.querySelectorAll(':not(.popup__wrapper)');
const focusedElementBeforePopup = document.activeElement;
const firstElement = document.getElementById("popup-name-input");

const hideAll = () => {
  elementsToHide.forEach((element) => {
    element.setAttribute('aria-hidden', 'true');
    });

  firstElement.focus();
}

const closePopup = () => {
  popup.classList.remove("popup--is-open");

  document.removeEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup();
    }
  })

  elementsToHide.forEach(function(element) {
    element.removeAttribute('aria-hidden');
  });

  if (focusedElementBeforePopup) {
    focusedElementBeforePopup.focus();
  }
}

const openPopup = () => {
  popup.classList.add("popup--is-open");

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup();
    }
  })

  if (window.innerHeight < popupWrapper.offsetHeight) {
    popupWrapper.style.position = "absolute";
    popupWrapper.style.top = "0";
  } else {
    popupWrapper.style.position = "relative";
  }

  hideAll();
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
