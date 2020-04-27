// /* eslint-disable */
/* eslint-disable no-plusplus */
class Slider {
  constructor(options) {
    this.slider = options.slider;
    this.itemsSlider = options.itemsSlider;
    this.mode = options.mode || false;
    this.delay = options.delay || 3000;
    this.isNav = options.isNav;
    this.navOptions = options.navOptions;
    this.createdItemsNav = false;
    this.indexOfSlide = 0;
    this.timerId = null;
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.slider.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    });
    this.slider.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].clientX;
      this.handleGesture(e);
    });

    this.isNav && this.createdList(this.isNav);
    this.handleMode(this.mode);
    this.init(this.indexOfSlide);
  }

  hideSlides() {
    this.itemsSlider.forEach(item => item.classList.remove('active'));
  }

  showSlide(n) {
    this.itemsSlider[n].classList.add('active');
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

  handleGesture(e) {
    let target = e.target;
    if (this.touchEndX - this.touchStartX >= 30 && !target.closest('ul')) {
      this.handleMode(false);
      this.init(--this.indexOfSlide);
    }

    if (this.touchStartX - this.touchEndX >= 30 && !target.closest('ul')) {
      this.handleMode(false);
      this.init(++this.indexOfSlide);
    }
  }

  async init(i) {
    const n = await this.checkIndex(i);
    this.hideSlides();
    this.showSlide(n);
    this.createdItemsNav && this.showActiveItemNav(n);
  }

  handleMode(mode) {
    if (mode === 'auto') {
      this.timerId = setInterval(() => this.init(++this.indexOfSlide), this.delay);
    } else {
      this.timerId && clearInterval(this.timerId);
    }
  }

  createdList(isNav) {
    if (isNav) {
      let nav = this.navOptions.nav;
      let ul = document.createElement('ul');
      ul.classList.add(this.navOptions.list);

      this.itemsSlider.forEach((item) => {
        let title = item.querySelector('h1').textContent;
        let li = document.createElement('li');
        li.classList.add(this.navOptions.item);
        li.textContent = title || 'Item';
        ul.append(li);
      });
      nav.append(ul);
      this.handlerNav(ul);
    }
  }

  handlerNav(ul) {
    if (ul) {
      let items = ul.querySelectorAll('li');
      items.forEach((item, i) => {
        item.addEventListener('click', () => {
          this.handleMode(false);
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

  showActiveItemNav(n) {
    this.removeActiveNavItems(this.createdItemsNav);
    this.addActiveNavItem(this.createdItemsNav[n]);

    let isScroll = this.navOptions.nav.scrollWidth > this.navOptions.nav.clientWidth;

    if (isScroll && n > 0) {
      this.navOptions.nav.scrollLeft += this.createdItemsNav[n].getBoundingClientRect().x - 20;
    } else {
      this.navOptions.nav.scrollLeft = 0;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.nav-slider');
  if (slider) {
    (() => new Slider({
      slider: document.querySelector('.nav-slider'),
      itemsSlider: document.querySelectorAll('.nav-slider__item'),
      mode: 'auto',
      delay: 5000,
      isNav: true,
      navOptions: {
        nav: document.querySelector('.nav-slider__nav'),
        list: 'nav-slider__list',
        item: 'nav-slider__list-item',
      }
    }))();
  }
});