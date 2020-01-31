import {
  Slider
} from '../slider/slider';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider-projects');
  if (slider && window.innerWidth < 767) {
    (() => new Slider({
      slider: document.querySelector('.slider-projects'),
      itemsOfSlider: document.querySelectorAll('.slider-projects__item'),
      leftButtonOfSlider: document.querySelector('.slider-projects__button--left'),
      rightButtonOfSlider: document.querySelector('.slider-projects__button--right'),
      numOfPointer: document.querySelector('.slider-projects__pointer-num'),
      amountOfPointer: document.querySelector('.slider-projects__pointer-amount'),
    }))();
  }
});