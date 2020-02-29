/* eslint-disable */

// Fix viewport units for height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Common
import '../blocks/modules/common/menu/menu';
import '../blocks/modules/common/slider-promo/slider-promo';
import '../blocks/modules/common/slider-post/slider-post';
import '../blocks/modules/common/slider-projects/slider-projects';
import '../blocks/modules/common/form/form';
import '../blocks/modules/common/alert/alert';

// Pages
import '../blocks/modules/pages/index/index';
import '../blocks/modules/pages/post-project/post-project';