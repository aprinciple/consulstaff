export default class Carousel {

  constructor(options) {
    this.slider = options.slider;
    this.wrap = options.wrap;
    this.items = options.items;
    this.prev = options.prev;
    this.next = options.next;
    this.currentPointer = options.currentPointer;
    this.amountPointer = options.amountPointer;
    this.noTransition = options.noTransition;
    this.autoplay = options.autoplay;
    this.autoplayDelay = options.autoplayDelay;
    this.position = 0;
    this.max_position = this.items.length;
    this.xDown;
    this.yDown;
    this.xUp;
    this.yUp;
    this.xDiff;
    this.yDiff;
    this.init();
  }

  async isButton() {
    return this.prev && this.next;
  }

  showSlide(pos) {
    this.wrap.style.transform = `translateX(-${pos}00%)`;
    this.setCurrentPointer(++pos);
  }

  initTransition() {
    this.wrap.classList.add(this.noTransition);
    setTimeout(() => {
      this.wrap.classList.remove(this.noTransition);
    }, 10)
  }

  async checkPosition(pos) {
    if (pos < 0) {
      this.position = this.max_position - 1;
      this.initTransition();
    }

    if (pos >= this.max_position) {
      this.position = 0;
      this.initTransition();
    }

    return this.position;
  }

  async showPrevSlide() {
    let pos = await this.checkPosition(--this.position);
    this.showSlide(pos);
  }

  async showNextSlide() {
    let pos = await this.checkPosition(++this.position);
    this.showSlide(pos);
  }

  handleGesture() {
    this.slider.addEventListener('touchstart', (e) => this.hts(e), false);
    this.slider.addEventListener('touchmove', (e) => this.htm(e), false);
  }

  hts(e) {
    this.xDown = e.touches[0].clientX;
    this.yDown = e.touches[0].clientY;
  }

  htm(e) {
    if ( ! this.xDown || ! this.yDown ) {
			return;
		}
    
		this.xUp = e.touches[0].clientX;
		this.yUp = e.touches[0].clientY;

		this.xDiff = this.xDown - this.xUp;
		this.yDiff = this.yDown - this.yUp;

		if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) {
			if ( this.xDiff > 0 ) {
				this.showPrevSlide();
			} else {
				this.showNextSlide();
			}
		}

		this.xDown = 0;
		this.yDown = 0;
  }

  autoPlaySlide(delay) {
    setInterval(() => {
      this.showNextSlide();
    }, delay);
  }

  setCurrentPointer(pos) {
    if (pos < 10) {
      this.currentPointer.textContent = '0' + pos;
    }
  }

  setAmountPointer() {
    if (this.max_position < 10) {
      this.amountPointer.textContent = '0' + this.max_position;
    }
  }

  async init() {
    let isButton = await this.isButton();

    if (isButton) {
      this.prev.addEventListener('click', () => this.showPrevSlide());
      this.next.addEventListener('click', () => this.showNextSlide());
    }
    this.handleGesture();
    this.autoplay && this.autoPlaySlide(this.autoplayDelay);
    this.setCurrentPointer(this.position + 1);
    this.setAmountPointer();
  }
}