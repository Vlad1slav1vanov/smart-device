const question = document.getElementById("question-textarea");
const name = document.getElementById("name-input");
const phone = document.getElementById("phone-input");
const checkbox = document.getElementById("access-checkbox");
const submitButton = document.getElementById("submit-form");

const popupQuestion = document.getElementById("popup-question-textarea");
const popupName = document.getElementById("popup-name-input");
const popupPhone = document.getElementById("popup-phone-input");
const popupCheckbox = document.getElementById("popup-access-checkbox");
const popupSubmitButton = document.getElementById("submit-popup");

const focusEvt = () => {
  question.addEventListener("focus", () => {
    name.tabIndex = 1;
    phone.tabIndex = 2;
    question.tabIndex = 3;
    checkbox.tabIndex = 4;
    submitButton.tabIndex = 5;
  })

  submitButton.addEventListener("focus", () => {
    name.tabIndex = 0;
    phone.tabIndex = 0;
    question.tabIndex = 0;
    checkbox.tabIndex = -1;
    submitButton.tabIndex = 0;
  })

  popupQuestion.addEventListener("focus", () => {
    popupName.tabIndex = 1;
    popupPhone.tabIndex = 2;
    popupQuestion.tabIndex = 3;
    popupCheckbox.tabIndex = 4;
    popupSubmitButton.tabIndex = 5;
  })

  popupSubmitButton.addEventListener("focus", () => {
    popupName.tabIndex = 0;
    popupPhone.tabIndex = 0;
    popupQuestion.tabIndex = 0;
    popupCheckbox.tabIndex = -1;
    popupSubmitButton.tabIndex = 0;
  })
}

export {focusEvt};