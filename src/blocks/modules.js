/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Common
import '../blocks/modules/common/menu/menu';
import '../blocks/modules/common/slider-nav/slider-nav';
import '../blocks/modules/common/slider-post/slider-post';
import '../blocks/modules/common/form/form';
import '../blocks/modules/common/alert/alert';

// Pages
import '../blocks/modules/pages/index/index';
import '../blocks/modules/pages/post-project/post-project';
import '../blocks/modules/pages/library/library';
import '../blocks/modules/pages/objects/objects';
import '../blocks/modules/pages/object/object';