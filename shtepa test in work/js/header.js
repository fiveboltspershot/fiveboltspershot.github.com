const burgerIcon = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const footerNav = document.querySelector('.footer__nav');

burgerIcon.addEventListener('click', () => {
  headerNav.classList.toggle('active');
  footerNav.classList.toggle('active');
});
