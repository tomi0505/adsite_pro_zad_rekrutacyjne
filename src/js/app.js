import '../scss/index.scss'

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburger = document.querySelector('#hamburger');
  const $excerptBtn = $( ".excerpt-btn" );

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  $(function () {
    $("#tabs").tabs();
  });

  $excerptBtn.click(function(e) {
    e.preventDefault();
    $(this).prev().toggle();
    $(this).toggleClass('excerpt-btn--open');
    $(this).text('Rozwiń');
    $('.excerpt-btn--open').text('Zwiń');
    
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