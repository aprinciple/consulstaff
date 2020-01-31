document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');

  if (menu) {
    const toggle = menu.querySelector('.menu__toggle');
    const subList = menu.querySelector('.menu__sub-list');

    menu.addEventListener('click', (e) => {
      let target = e.target;

      if (target.closest('.menu__toggle')) {
        toggle.classList.toggle('open');
      }
    });

    if (subList) {
      let toggleSubList = subList.previousElementSibling;
      toggleSubList.classList.add('menu__toggle-sub-list');

      toggleSubList.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
  
        if (target.closest('.menu__toggle-sub-list')) {
          toggleSubList.classList.add('open');
        }

        if (toggleSubList.classList.contains('open')) {
          toggleSubList.addEventListener('click', () => {
            let href = toggleSubList.href;
            window.open(href, '_self');
          });
        }
      });
    }
  }
});