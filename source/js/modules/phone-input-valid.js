import { initPhoneInput } from "./form-validate/init-phone-input";
import { Validator } from "./form-validate/validator";

const validator = new Validator();

const pageButtonSubmit = document.getElementById("submit-form");
const pagePhoneParent = document.getElementById("feedback-form-phone-parent");
const pagePhoneInput = document.getElementById("phone-input");

const popupButtonSubmit = document.getElementById("submit-popup");
const popupPhoneParent = document.getElementById("parent-phone-input-popup");
const popupPhoneInput = document.getElementById("popup-phone-input");

const popupForm = document.getElementById("feedback-form-popup");
const pageForm = document.getElementById("feedback-form-page");

const addPhoneValids = () => {
  initPhoneInput(pagePhoneParent);
  initPhoneInput(popupPhoneParent);

  pageButtonSubmit.addEventListener("click", () => {
    validator._validatePhoneInput(pagePhoneParent, pagePhoneInput);
  });

  popupButtonSubmit.addEventListener("click", () => {
    validator._validatePhoneInput(popupPhoneParent, popupPhoneInput);
  });
}

export {addPhoneValids}
