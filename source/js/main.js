import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initTabs} from './vendor/init-tabs';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initTabs();
    const form = new Form();
    window.form = form;
    form.init();

    // eslint-disable-next-line no-unused-vars, no-undef
    const trainersSwiper = new Swiper('.trainers__swiper-container', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 45,
        },
      },
      navigation: {
        nextEl: '.trainers__button-next',
        prevEl: '.trainers__button-prev',
      },
    });

    // eslint-disable-next-line no-unused-vars, no-undef
    const reviewsSwiper = new Swiper('.reviews__swiper-wrapper', {
      direction: 'horizontal',
      slidesPerView: 1,
      spaceBetween: 50,
      navigation: {
        nextEl: '.reviews__right-button',
        prevEl: '.reviews__left-button',
      },
    });

    setInterval(function () {
      if (document.activeElement instanceof HTMLIFrameElement) {
        document.querySelector('[data-media="cover"]').style.opacity = 0;
        document.querySelector('[data-media="background"]').style.opacity = 0;
        document.querySelector('[data-media="player"]').style.opacity = 1;
      }
    }, 50);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
