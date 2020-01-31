import {Slider} from '../slider/slider';

document.addEventListener('DOMContentLoaded', () => {
const slider = document.querySelector('.post-slider');
if (slider) {
  (() => new Slider({
    slider: document.querySelector('.post-slider'),
    itemsOfSlider: document.querySelectorAll('.post-slider__item'),
    leftButtonOfSlider: document.querySelector('.post-slider__button--left'),
    rightButtonOfSlider: document.querySelector('.post-slider__button--right'),
    numOfPointer: document.querySelector('.post-slider__pointer-num'),
    amountOfPointer: document.querySelector('.post-slider__pointer-amount'),
  }))();
}
});