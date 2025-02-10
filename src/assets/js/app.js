
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}

import.meta.glob('../../stories/components/**/*.css', { eager: true }); // Or .scss
const componentModules = import.meta.glob('../../stories/components/**/*.js', { eager: true }); // Or .scss


import '../css/output.css'; // tailwind
import '../icomoon/style.css'; // icomoon

import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect';

Alpine.plugin(focus); 
Alpine.plugin(intersect);
window.Alpine = Alpine
Alpine.start()


// Smooth Scroll Initialization
const initSmoothScroll = () => {
  document.addEventListener('click', function(event) {
    const target = event.target.closest('a[href^="#"]:not([href="#"])');
    if (target) {
      event.preventDefault();
      document.documentElement.classList.add('is-scrolling');
      if (
        location.pathname.replace(/^\//, '') === target.pathname.replace(/^\//, '') &&
        location.hostname === target.hostname
      ) {
        let scrollToElement = document.querySelector(target.hash);
        scrollToElement = scrollToElement ? scrollToElement : document.querySelector(`[name=${target.hash.slice(1)}]`);
        if (scrollToElement) {
          window.scrollTo({
            top: scrollToElement.offsetTop,
            behavior: 'smooth'
          });
          setTimeout(() => {
            document.documentElement.classList.remove('is-scrolling');
          }, 500);
        }
      }
    }
  });
};

// Table Scroll Initialization
const initTableScroll = () => {
  document.querySelectorAll('table').forEach(table => {
    if (!table.closest('.table-scroll')) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('table-scroll_wrapper');
      const scrollDiv = document.createElement('div');
      scrollDiv.classList.add('table-scroll');
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(scrollDiv);
      scrollDiv.appendChild(table);
    }
  });

  document.querySelectorAll('.table-scroll').forEach(scrollDiv => {
    scrollDiv.addEventListener('scroll', function() {
      const wrapper = scrollDiv.parentNode;
      wrapper.classList.toggle('is-end', scrollDiv.scrollLeft + scrollDiv.clientWidth >= scrollDiv.scrollWidth);
    });
  });
};

// Document Ready Equivalent
const onDocumentReady = () => {
  initTableScroll();
  initSmoothScroll();
  
  Object.values(componentModules).forEach(module => {
    if (typeof module.default === 'function') {
      module.default();
    }
  });

};

document.addEventListener('DOMContentLoaded', () => {
  const event = new Event('_page_ready');
  document.dispatchEvent(event);
  
});

document.addEventListener('_page_ready', onDocumentReady);