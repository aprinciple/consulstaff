/* eslint-disable no-plusplus */
class Slider {
  constructor(options) {
    this.slider = options.slider;
    this.itemsOfSlider = options.itemsOfSlider;
    this.leftButtonOfSlider = options.leftButtonOfSlider;
    this.rightButtonOfSlider = options.rightButtonOfSlider;
    this.numOfPointer = options.numOfPointer;
    this.amountOfPointer = options.amountOfPointer;
    this.mode = options.mode;
    this.indexOfSlide = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.leftButtonOfSlider.addEventListener('click', () => this.init(--this.indexOfSlide));
    this.rightButtonOfSlider.addEventListener('click', () => this.init(++this.indexOfSlide));
    this.slider.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    });
    this.slider.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleGesture();
    });

    this.init(this.indexOfSlide, this.mode);
  }

  hideSlides() {
    this.itemsOfSlider.forEach((item) => {
      const slide = item;
      slide.style.display = 'none';
    });
  }

  setPointer(num, amount) {
    this.numOfPointer.textContent = num + 1;
    this.amountOfPointer.textContent = amount;
    
    if (num < 10) {
      this.numOfPointer.textContent = '0' + this.numOfPointer.textContent;
    }

    if (amount < 10) {
      this.amountOfPointer.textContent = '0' + this.amountOfPointer.textContent;
    }
  }

  async checkIndex(n) {
    if (n < 0) {
      this.indexOfSlide = this.itemsOfSlider.length - 1;
    }
    if (n >= this.itemsOfSlider.length) {
      this.indexOfSlide = 0;
    }

    return this.indexOfSlide;
  }

  showSlide(n) {
    this.itemsOfSlider[n].style.display = 'block';
  }

  handleGesture() {
    if (this.touchEndX - this.touchStartX >= 30) {
      this.init(--this.indexOfSlide);
    }

    if (this.touchStartX - this.touchEndX >= 30) {
      this.init(++this.indexOfSlide);
    }
  }

  async init(i, mode) {
    const n = await this.checkIndex(i);
    this.hideSlides();
    this.setPointer(n, this.itemsOfSlider.length);
    this.showSlide(n);
    this.handleMode(mode);
  }

  handleMode(mode) {
    if (mode === 'auto') {
      setInterval(() => {
        this.rightButtonOfSlider.click();
      }, 2000);
    }
  }
}

export {Slider};

// Example

  // document.addEventListener('DOMContentLoaded', () => {
  //   const slider = document.querySelector('.slider');
  //   if (slider) {
  //     (() => new Slider({
  //       slider: document.querySelector('.slider'),
  //       itemsOfSlider: document.querySelectorAll('.slider__item'),
  //       leftButtonOfSlider: document.querySelector('.slider__button--left'),
  //       rightButtonOfSlider: document.querySelector('.slider__button--right'),
  //       numOfPointer: document.querySelector('.slider__pointer-num'),
  //       amountOfPointer: document.querySelector('.slider__pointer-amount'),
  //     }))();
  //   }
  // });