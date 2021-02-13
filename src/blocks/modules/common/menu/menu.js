document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');

  if (menu) {
    let toggle = menu.querySelector('.menu__toggle');
    let subList = menu.querySelector('.menu__sub-list');

    menu.addEventListener('click', (e) => {
      let target = e.target;

      if (target.closest('.menu__toggle')) {
        toggle.classList.toggle('open');
      }
    });

    if (subList) {
      let parentSubList = subList.closest('li');
      let toggleSubList = subList.previousElementSibling;
      toggleSubList.classList.add('menu__toggle-sub-list');

      if (window.matchMedia("(max-width: 992px)").matches) {
        toggleSubList.addEventListener('click', (e) => {
          e.preventDefault();
          let target = e.target;
    
          if (target.closest('.menu__toggle-sub-list')) {
            toggleSubList.classList.toggle('open');
          }
        });
      } else {
        parentSubList.addEventListener('mouseover', (e) => {
          toggleSubList.classList.add('open');
        });
        parentSubList.addEventListener('mouseout', (e) => {
          toggleSubList.classList.remove('open');
        });
      }

    }
  }
});