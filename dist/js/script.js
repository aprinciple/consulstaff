!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=7)}([function(t,e){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".menu");if(t){let e=t.querySelector(".menu__toggle"),s=t.querySelector(".menu__sub-list");if(t.addEventListener("click",t=>{t.target.closest(".menu__toggle")&&e.classList.toggle("open")}),s){let t=s.closest("li"),e=s.previousElementSibling;e.classList.add("menu__toggle-sub-list"),window.matchMedia("(max-width: 992px)").matches?e.addEventListener("click",t=>{t.preventDefault(),t.target.closest(".menu__toggle-sub-list")&&e.classList.toggle("open")}):(t.addEventListener("mouseover",t=>{e.classList.add("open")}),t.addEventListener("mouseout",t=>{e.classList.remove("open")}))}}})},function(t,e){class s{constructor(t){this.slider=t.slider,this.itemsSlider=t.itemsSlider,this.mode=t.mode||!1,this.delay=t.delay||3e3,this.isNav=t.isNav,this.navOptions=t.navOptions,this.createdItemsNav=!1,this.indexOfSlide=0,this.timerId=null,this.touchStartX=0,this.touchEndX=0,this.slider.addEventListener("touchstart",t=>{this.touchStartX=t.touches[0].clientX}),this.slider.addEventListener("touchend",t=>{this.touchEndX=t.changedTouches[0].clientX,this.handleGesture(t)}),this.isNav&&this.createdList(this.isNav),this.handleMode(this.mode),this.init(this.indexOfSlide)}hideSlides(){this.itemsSlider.forEach(t=>t.classList.remove("active"))}showSlide(t){this.itemsSlider[t].classList.add("active")}async checkIndex(t){return t<0&&(this.indexOfSlide=this.itemsSlider.length-1),t>=this.itemsSlider.length&&(this.indexOfSlide=0),this.indexOfSlide}handleGesture(t){let e=t.target;this.touchEndX-this.touchStartX>=30&&!e.closest("ul")&&(this.handleMode(!1),this.init(--this.indexOfSlide)),this.touchStartX-this.touchEndX>=30&&!e.closest("ul")&&(this.handleMode(!1),this.init(++this.indexOfSlide))}async init(t){const e=await this.checkIndex(t);this.hideSlides(),this.showSlide(e),this.createdItemsNav&&this.showActiveItemNav(e)}handleMode(t){"auto"===t?this.timerId=setInterval(()=>this.init(++this.indexOfSlide),this.delay):this.timerId&&clearInterval(this.timerId)}createdList(t){if(t){let t=this.navOptions.nav,e=document.createElement("ul");e.classList.add(this.navOptions.list),this.itemsSlider.forEach(t=>{let s=t.querySelector("h1").textContent,i=document.createElement("li");i.classList.add(this.navOptions.item),i.textContent=s||"Item",e.append(i)}),t.append(e),this.handlerNav(e)}}handlerNav(t){if(t){let e=t.querySelectorAll("li");e.forEach((t,e)=>{t.addEventListener("click",()=>{this.handleMode(!1),this.init(this.indexOfSlide=e)})}),this.createdItemsNav=e}}addActiveNavItem(t){t.classList.add("active")}removeActiveNavItems(t){t.forEach(t=>t.classList.remove("active"))}showActiveItemNav(t){this.removeActiveNavItems(this.createdItemsNav),this.addActiveNavItem(this.createdItemsNav[t]),this.navOptions.nav.scrollWidth>this.navOptions.nav.clientWidth&&t>0?this.navOptions.nav.scrollLeft+=this.createdItemsNav[t].getBoundingClientRect().x-20:this.navOptions.nav.scrollLeft=0}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".nav-slider")&&new s({slider:document.querySelector(".nav-slider"),itemsSlider:document.querySelectorAll(".nav-slider__item"),mode:"auto",delay:5e3,isNav:!0,navOptions:{nav:document.querySelector(".nav-slider__nav"),list:"nav-slider__list",item:"nav-slider__list-item"}})})},function(t,e){class s{constructor(t){this.form=t.form,this.url=t.url,this.method=t.method,this.alert=t.alertOpt.alert,this.classSuccess=t.alertOpt.classSuccess,this.classError=t.alertOpt.classError,this.alertMessage=t.alertOpt.message,this.form.forEach(t=>{t.addEventListener("submit",t=>{this.sendRequest(t)})})}createRequest(t){const e=new FormData(t);fetch(t.action,{method:"POST",body:e}).then(e=>{200===e.status?(this.showAlertSuccess(this.setMessageSuccess()),t.classList.contains("form--popup")&&(t.style.display="none")):this.showAlertError(this.setMessageError())}).catch(t=>console.error(t))}sendRequest(t){t.preventDefault(),this.createRequest(t.currentTarget)}showAlertSuccess(t){this.alert.classList.add(this.classSuccess),this.alertMessage.innerHTML=t,this.alert.style.display="flex"}showAlertError(t){this.alert.classList.add(this.classError),this.alertMessage.innerHTML=t,this.alert.style.display="flex"}setMessageSuccess(){let t=document.documentElement.lang,e="";return"ru_RU"===t&&(e="<h6>Сообщение отправлено!</h6><p>Мы свяжемся с вами в ближайшее время</p>"),"it_IT"===t&&(e="<h6>Messaggio inviato!</h6><p>Ti contatteremo a breve</p>"),"en_US"===t&&(e="<h6>Message sent!</h6><p>We will contact you shortly</p>"),e}setMessageError(){let t=document.documentElement.lang,e="";return"ru_RU"===t&&(e="<p>Упс! Что-то пошло не так :(</p>"),"it_IT"===t&&(e="<h6>Oops!</h6><p>Qualcosa è andato storto :(</p>"),"en_US"===t&&(e="<h6>Oops!</h6><p>Something went wrong :(</p>"),e}}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".form--post");t&&new s({form:t,url:"",method:"POST",alertOpt:{alert:document.querySelector(".alert"),classSuccess:"alert--success",classError:"alert--error",message:document.querySelector(".alert__message")}})})},function(t,e){class s{constructor(t){this.alert=t.alert,this.cancel=t.cancel}closeAlert(){this.alert.addEventListener("click",t=>{t.target.closest("."+this.cancel.className)&&(this.alert.style.display="none")})}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".alert")&&new s({alert:document.querySelector(".alert"),cancel:document.querySelector(".alert__close")}).closeAlert()})},function(t,e){},function(t,e){document.addEventListener("DOMContentLoaded",()=>{if(document.querySelector(".page-post-project")){document.documentElement.style.scrollBehavior="smooth"}})},function(t,e){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".page-library__items");if(t){const e=new IntersectionObserver((function(t,e){t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("open"),e.unobserve(t.target))})}),{root:null,rootMargin:"0px 0px -40% 0px",threshold:1});t.querySelectorAll(".page-library__item").forEach(t=>e.observe(t))}})},function(t,e,s){"use strict";s.r(e);s(0),s(1);class i{constructor(t){this.slider=t.slider,this.itemsOfSlider=t.itemsOfSlider,this.leftButtonOfSlider=t.leftButtonOfSlider,this.rightButtonOfSlider=t.rightButtonOfSlider,this.numOfPointer=t.numOfPointer,this.amountOfPointer=t.amountOfPointer,this.mode=t.mode,this.indexOfSlide=0,this.touchStartX=0,this.touchEndX=0,this.leftButtonOfSlider.addEventListener("click",()=>this.init(--this.indexOfSlide)),this.rightButtonOfSlider.addEventListener("click",()=>this.init(++this.indexOfSlide)),this.slider.addEventListener("touchstart",t=>{this.touchStartX=t.touches[0].clientX}),this.slider.addEventListener("touchend",t=>{this.touchEndX=t.changedTouches[0].clientX,this.handleGesture()}),this.init(this.indexOfSlide,this.mode)}hideSlides(){this.itemsOfSlider.forEach(t=>{t.style.display="none"})}setPointer(t,e){this.numOfPointer.textContent=t+1,this.amountOfPointer.textContent=e,t<10&&(this.numOfPointer.textContent="0"+this.numOfPointer.textContent),e<10&&(this.amountOfPointer.textContent="0"+this.amountOfPointer.textContent)}async checkIndex(t){return t<0&&(this.indexOfSlide=this.itemsOfSlider.length-1),t>=this.itemsOfSlider.length&&(this.indexOfSlide=0),this.indexOfSlide}showSlide(t){this.itemsOfSlider[t].style.display="block"}handleGesture(){this.touchEndX-this.touchStartX>=30&&this.init(--this.indexOfSlide),this.touchStartX-this.touchEndX>=30&&this.init(++this.indexOfSlide)}async init(t,e){const s=await this.checkIndex(t);this.hideSlides(),this.setPointer(s,this.itemsOfSlider.length),this.showSlide(s),this.handleMode(e)}handleMode(t){"auto"===t&&setInterval(()=>{this.init(++this.indexOfSlide)},3500)}}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".post-slider")&&new i({slider:document.querySelector(".post-slider"),itemsOfSlider:document.querySelectorAll(".post-slider__item"),leftButtonOfSlider:document.querySelector(".post-slider__button--left"),rightButtonOfSlider:document.querySelector(".post-slider__button--right"),numOfPointer:document.querySelector(".post-slider__pointer-num"),amountOfPointer:document.querySelector(".post-slider__pointer-amount")})});s(2),s(3),s(4),s(5),s(6);document.addEventListener("DOMContentLoaded",()=>{let t=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",t+"px")})}]);