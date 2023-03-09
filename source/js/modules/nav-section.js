const navItems = document.querySelectorAll('.nav-section__item');
const navList = document.querySelector('.nav-section__list');

const navItemsCheck = () => {
  if (navItems.length > 8) {
    console.log(navItems.length)
    navList.style.height = `${(navItems.length * 35) / 2}px`
    console.log(navList.style.height)
  }
}

export {navItemsCheck};