const formScrollButton = document.querySelector(".main-description__button");
const feedBackForm = document.getElementById("feedback-form");

const scrollToForm = () => {
  feedBackForm.scrollIntoView({behavior: "smooth"});
};

const scrollToFormAddEvent = () => {
  formScrollButton.addEventListener("click", scrollToForm);
};

export {scrollToFormAddEvent};
