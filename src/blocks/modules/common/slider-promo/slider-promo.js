import {Slider} from '../slider/slider';

document.addEventListener('DOMContentLoaded', () => {
const slider = document.querySelector('.promo-slider');
if (slider) {
  (() => new Slider({
    slider: document.querySelector('.promo-slider'),
    itemsOfSlider: document.querySelectorAll('.promo-slider__item'),
    leftButtonOfSlider: document.querySelector('.promo-slider__button--left'),
    rightButtonOfSlider: document.querySelector('.promo-slider__button--right'),
    numOfPointer: document.querySelector('.promo-slider__pointer-num'),
    amountOfPointer: document.querySelector('.promo-slider__pointer-amount'),
    mode: 'auto',
  }))();
}
});
