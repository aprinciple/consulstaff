// /* eslint-disable */
/* eslint-disable no-plusplus */
class Slider {
  constructor(options) {
    this.slider = options.slider;
    this.itemsSlider = options.itemsSlider;
    this.mode = options.mode || false;
    this.delay = options.delay || 500;
    this.nav = options.nav;
    this.navOptions = options.navOptions;
    this.createdItemsNav = false;
    this.indexOfSlide = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.slider.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    });
    this.slider.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleGesture(e);
    });

    this.nav && this.showNav(this.nav);
    this.mode && this.handleMode(this.mode);
    this.init(this.indexOfSlide, this.mode);
  }

  hideSlides() {
    this.itemsSlider.forEach(item => item.style.display = 'none');
  }

  async checkIndex(n) {
    if (n < 0) {
      this.indexOfSlide = this.itemsSlider.length - 1;
    }
    if (n >= this.itemsSlider.length) {
      this.indexOfSlide = 0;
    }

    return this.indexOfSlide;
  }

  showSlide(n) {
    this.itemsSlider[n].style.display = 'block';
  }

  handleGesture(e) {
    let target = e.target;
    if (this.touchEndX - this.touchStartX >= 30 && !target.closest('ul')) {
      this.init(--this.indexOfSlide);
    }

    if (this.touchStartX - this.touchEndX >= 30 && !target.closest('ul')) {
      this.init(++this.indexOfSlide);
    }
  }

  async init(i) {
    const n = await this.checkIndex(i);
    this.hideSlides();
    this.showSlide(n);

    if (this.createdItemsNav) {
      this.removeActiveNavItems(this.createdItemsNav);
      this.addActiveNavItem(this.createdItemsNav[n]);
    }
  }

  handleMode(mode) {
    if (mode === 'auto') {
      setInterval(() => {
        this.init(++this.indexOfSlide);
      }, this.delay);
    }

  }

  showNav(isNav) {
    if (isNav) {
      let container = this.slider.querySelector('.promo-slider__nav-container');
      let ul = document.createElement('ul');
      ul.classList.add(this.navOptions.container);

      this.itemsSlider.forEach((item) => {
        let title = item.querySelector('h1').textContent;
        let li = document.createElement('li');
        li.classList.add(this.navOptions.item);
        li.textContent = title || 'Item';
        ul.append(li);
      });
      container.append(ul);
      this.handlerNav(ul);
    }
  }

  handlerNav(ul) {
    if (ul) {
      let items = ul.querySelectorAll('li');
      items.forEach((item, i) => {
        item.addEventListener('click', () => {
          this.init(this.indexOfSlide = i);
        });
      });

      this.createdItemsNav = items;
    }
  }

  addActiveNavItem(item) {
    item.classList.add('active');
  }

  removeActiveNavItems(items) {
    items.forEach(item => item.classList.remove('active'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.promo-slider');
  if (slider) {
    (() => new Slider({
      mode: 'auto',
      delay: 4000,
      nav: true,
      navOptions: {
        container: 'promo-slider__nav',
        item: 'promo-slider__nav-item',
      },
      slider: document.querySelector('.promo-slider'),
      itemsSlider: document.querySelectorAll('.promo-slider__item'),
    }))();
  }
});