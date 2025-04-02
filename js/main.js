const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const items = document.querySelectorAll('.tours__item');

items.forEach(element => {
  element.addEventListener('click', () => {
    items.forEach(el => el.classList.remove('tours__item--active'));

    element.classList.add('tours__item--active');
  });
});
