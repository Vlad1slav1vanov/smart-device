const openPopupButton = document.querySelector(".header__open-popup-btn");
const closePopupButton = document.querySelector(".popup__button-close");
const popup = document.querySelector(".popup");
const popupWrapper = document.querySelector(".popup__wrapper");

const body = document.querySelector('body');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const focusedElementBeforePopup = document.activeElement;
const firstElement = document.getElementById("popup-name-input");

const popupQuestion = document.getElementById("popup-question-textarea");
const popupName = document.getElementById("popup-name-input");
const popupPhone = document.getElementById("popup-phone-input");
const popupCheckbox = document.getElementById("popup-access-checkbox");
const popupSubmitButton = document.getElementById("submit-popup");

const hideAll = () => {
  main.setAttribute("inert", "true");
  header.setAttribute("inert", "true");
  footer.setAttribute("inert", "true");
  firstElement.focus();
}

const focusTrap = () => {
  const focusableEls = popupWrapper.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0];  
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;
  
  popupWrapper.addEventListener('keydown', (e) => {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

    if (!isTabPressed) { 
      return; 
    }

    if ( e.shiftKey ) /* shift + tab */ {
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
          e.preventDefault();
        }
      } else /* tab */ {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
          e.preventDefault();
        }
      }
  });
}

const closePopup = () => {
  popup.classList.remove("popup--is-open");
  main.removeAttribute("inert");
  header.removeAttribute("inert");
  footer.removeAttribute("inert");

  document.removeEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup();
    }
  })

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

  focusTrap();

  body.style.height = "100vh"

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
