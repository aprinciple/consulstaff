document.addEventListener('DOMContentLoaded', () => {
  const listServices = document.querySelector('.home-services__list');

  if (listServices && window.innerWidth > 1279) {
    const imageServices = listServices.querySelector('.home-services__list-photo-image');
    imageServices.src = listServices.querySelectorAll('.home-services__list-link')[0].dataset.image;

    listServices.addEventListener('mouseover', (e) => {
      let target = e.target;
      if (target.className === 'home-services__list-link') {
        const srcImage = target.dataset.image;
        imageServices.src = srcImage;
        imageServices.classList.remove('kenburns-top-out');
        imageServices.classList.add('kenburns-top');
      }
    });

    listServices.addEventListener('mouseout', (e) => {
      let target = e.target;
      if (target.className === 'home-services__list-link') {
        imageServices.classList.remove('kenburns-top');
        imageServices.classList.add('kenburns-top-out');
      }
    });
  }

  // Reset active state of first link

  
  if (listServices) {
    const linksListServices = listServices.querySelectorAll('.home-services__list-link');
    const firstLink = linksListServices[0];

    if (firstLink.classList.contains('home-services__list-link--active')) {
      linksListServices.forEach((item) => {
        if (item !== firstLink) {
          item.addEventListener('mouseover', () => {
            firstLink.classList.remove('home-services__list-link--active');
          });
          item.addEventListener('click', () => {
            firstLink.classList.remove('home-services__list-link--active');
          });
        }
      });
    }
  }
});