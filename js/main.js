const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

const bodyLock = document.querySelector('body');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
  menuBtn.blur();

  bodyLock.classList.toggle('lock');
});

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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

const accordeonTitle = document.querySelectorAll('.accordeon__title');

accordeonTitle.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    const accordeonTitleImg = document.querySelector('.accordeon__title-img');

    if (parent.classList.contains('accordeon__item--active')) {
      parent.classList.remove('accordeon__item--active');
    } else {
      accordeonTitle.forEach(element => {
        element.parentNode.classList.remove('accordeon__item--active');
      });

      parent.classList.add('accordeon__item--active');
    }
    item.blur();
  });
});
