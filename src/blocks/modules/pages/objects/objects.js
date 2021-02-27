const objectsSliders = document.querySelectorAll('.p-objects__item-slider');

if (objectsSliders) {
  objectsSliders.forEach((item) => {
    let prev = item.querySelector('.p-objects__item-slider-button--prev');
    let next = item.querySelector('.p-objects__item-slider-button--next');
    let currentSlide = item.querySelector('.p-objects__item-slider-nav-current');
    let totalSlides = item.querySelector('.p-objects__item-slider-nav-total');

    let slider = tns({
      'container': item.querySelector('.p-objects__item-slider-items'),
      'mode': 'gallery',
      'items': 1,
      'nav': false,
      'swipeAngle': false,
      'controls': false,
      'preventScrollOnTouch': 'force'
    });

    prev.addEventListener('click', (e) => slider.goTo('prev'));
    next.addEventListener('click', (e) => slider.goTo('next'));

    totalSlides.textContent = `${slider.getInfo().slideCount}`;
    slider.events.on('transitionEnd', function (info, eventName) {
      currentSlide.textContent = `${slider.getInfo().displayIndex}`;
    });
  });
}