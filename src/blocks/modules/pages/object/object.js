const objectSlider = document.querySelector('.p-object__slider');
if (objectSlider) {
  let slider = tns({
    'container': objectSlider.querySelector('.p-object__slider-items'),
    'items': 1,
    "controlsContainer": false,
    'navContainer': objectSlider.querySelector('.p-object__slider-thumbnails'),
    'navAsThumbnails': true,
    'swipeAngle': false,
    'controls': false,
    'preventScrollOnTouch': 'force'
  });
}