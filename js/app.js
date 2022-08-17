const swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 60,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      allowTouchMove: false,
    },
  },
});

const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primeryNav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  primeryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expended', false)
    : navToggle.setAttribute('aria-expended', true);
  primeryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});
