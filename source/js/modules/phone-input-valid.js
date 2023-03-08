import { initPhoneInput } from "./form-validate/init-phone-input";
import { Validator } from "./form-validate/validator";

const validator = new Validator();

const pagePhoneParent = document.getElementById("feedback-form-phone-parent");
const pagePhoneInput = document.getElementById("phone-input");

const popupPhoneParent = document.getElementById("parent-phone-input-popup");
const popupPhoneInput = document.getElementById("popup-phone-input");

const popupForm = document.getElementById("feedback-form-popup");
const pageForm = document.getElementById("feedback-form-page");

const addPhoneValids = () => {
  initPhoneInput(pagePhoneParent);
  initPhoneInput(popupPhoneParent);

  popupForm.addEventListener("submit", (evt) => {
    const isValid = validator._validatePhoneInput(popupPhoneParent, popupPhoneInput);
    if (!isValid) {
      evt.preventDefault();
      popupPhoneInput.focus();
    }
  });

  pageForm.addEventListener("submit", (evt) => {
    const isValid = validator._validatePhoneInput(pagePhoneParent, pagePhoneInput);
    if (!isValid) {
      evt.preventDefault();
      pagePhoneInput.focus();
    }
  });
}

export {addPhoneValids}
