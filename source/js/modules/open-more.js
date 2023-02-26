const openMoreButton = document.querySelector(".about-company__button-more");
const moreDescriptionBlock = document.querySelector(".about-company__more-description");

const toggleDescription = () => {
  openMoreButton.classList.toggle("about-company__button-more--is-open");
  moreDescriptionBlock.classList.toggle("about-company__more-description--is-open");

  openMoreButton.textContent === "Подробнее" 
  ? openMoreButton.textContent = "Свернуть"
  : openMoreButton.textContent = "Подробнее"
}

const addToggleDescriptionEvt = () => {
  openMoreButton.addEventListener("click", toggleDescription);
}

export {addToggleDescriptionEvt};

