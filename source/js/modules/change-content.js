const mobileScreen = window.matchMedia("(max-width: 767px)");
const tabletScreen = window.matchMedia("(min-width: 768px) and (max-width: 1023px)");
const desktopScreen = window.matchMedia("(min-width: 1024px)");

const consultButton = document.querySelector(".main-description__button");
const productsTitle = document.querySelector(".products__title");
const providersDescription = document.querySelector(".about-company__providers-description");

const changeText = () => {
  if (mobileScreen.matches) {
    consultButton.textContent = "Бесплатная консультация";
    productsTitle.textContent = "Товары и услуги Smart Device";
    providersDescription.textContent = "Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND."
  } else if (tabletScreen.matches || desktopScreen.matches) {
    consultButton.textContent = "Получить беслпатную консультацию";
    productsTitle.textContent = "Smart Device предлагает следующие товары и услуги";
    providersDescription.textContent = "Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России."   
  }
}

const addChangeTextEvt = () => {
  mobileScreen.addEventListener("change", changeText)
  tabletScreen.addEventListener("change", changeText)
  desktopScreen.addEventListener("change", changeText)
}

export {addChangeTextEvt};


