/* eslint-disable */
import Carousel from '../slider-carousel/slider-carousel';

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.promo-slider');
  if (carousel) {
    (() => new Carousel({
      slider: carousel,
      wrap: document.querySelector('.promo-slider__items'),
      items: document.querySelectorAll('.promo-slider__item'),
      prev: document.querySelector('.promo-slider__button--left'),
      next: document.querySelector('.promo-slider__button--right'),
      currentPointer: document.querySelector('.promo-slider__pointer-num'),
      amountPointer: document.querySelector('.promo-slider__pointer-amount'),
      noTransition: 'no-transition',
      autoplay: true,
      autoplayDelay: 3500,
    }))();
  }
});
