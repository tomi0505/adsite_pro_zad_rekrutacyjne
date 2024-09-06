import '../scss/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburger = document.querySelector('#hamburger');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});