const question = document.getElementById("question-textarea");
const name = document.getElementById("name-input");
const phone = document.getElementById("phone-input");
const checkbox = document.getElementById("access-checkbox");
const submitButton = document.getElementById("submit-form");

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


}

export {focusEvt};