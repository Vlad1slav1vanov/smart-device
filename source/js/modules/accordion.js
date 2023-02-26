const openNavButton = document.querySelector(".nav-section__button-plus");
const openContactsButton = document.querySelector(".contacts-section__button-plus");
const contactsList = document.querySelector(".contacts-section__list");
const navigation = document.querySelector(".nav-section__navigation");

const toggleContactsList = () => {
  contactsList.classList.toggle("contacts-section__list--is-open");
  openContactsButton.classList.toggle("contacts-section__button-plus--is-open")

  if (openNavButton.classList.contains("nav-section__button-plus--is-open")) {
    openNavButton.classList.remove("nav-section__button-plus--is-open");
    navigation.classList.remove("nav-section__navigation--is-open")
  }
}

const toggleNavigation = () => {
  openNavButton.classList.toggle("nav-section__button-plus--is-open");
  navigation.classList.toggle("nav-section__navigation--is-open")

  if (openContactsButton.classList.contains("contacts-section__button-plus--is-open")) {
    openContactsButton.classList.remove("contacts-section__button-plus--is-open");
    contactsList.classList.remove("contacts-section__list--is-open");
  }
}

const accordionsToggle = () => {
  openNavButton.addEventListener("click", toggleNavigation);
  openContactsButton.addEventListener("click", toggleContactsList);
}

export {accordionsToggle};
