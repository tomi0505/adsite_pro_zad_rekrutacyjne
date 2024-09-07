import '../scss/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburger = document.querySelector('#hamburger');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  $(function () {
    $("#tabs").tabs();
  });

  $('.slider-1').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});