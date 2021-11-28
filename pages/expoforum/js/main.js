const menuBtn = document.querySelector('.header__menu-btn');
const menuBurger = document.querySelector('.header__menu-burger');
const menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
    menuBurger.classList.toggle('active');
    menu.classList.toggle('active');
}
