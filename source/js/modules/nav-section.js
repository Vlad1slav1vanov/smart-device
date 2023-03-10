const navItems = document.querySelectorAll('.nav-section__item');
const navList = document.querySelector('.nav-section__list');
const desktopScreen = window.matchMedia("(min-width: 1024px)");

const navItemsCheck = () => {
  if (navItems.length > 8 && desktopScreen.matches) {
    navList.style.height = `${(navItems.length * 52) / 2}px`
  }
}

export {navItemsCheck};