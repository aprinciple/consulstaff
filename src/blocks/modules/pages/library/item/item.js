document.addEventListener('DOMContentLoaded', () => {
  const libraryItems = document.querySelector('.page-library__items');
  if(libraryItems) {
    const options = {
      root: null,
      rootMargin: '0px 0px -40% 0px',
      threshold: 1.0
    }
    
    const callback = function(entries, observer) { 
      entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('open');
            observer.unobserve(entry.target);
          }
      });
    };
    
    const observer = new IntersectionObserver(callback, options);
    const libraryItem = libraryItems.querySelectorAll('.page-library__item');
    libraryItem.forEach(item => observer.observe(item));
  }
});