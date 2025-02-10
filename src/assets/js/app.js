
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}

const componentCSS = import.meta.glob('../../stories/components/**/*.css', { eager: true }); // Or .scss
import '../css/output.css'; // tailwind
import '../icomoon/style.css'; // icomoon
import '../../../node_modules/slick-carousel/slick/slick.css'; // slick slider css

// import $ from 'jquery';
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect';

Alpine.plugin(focus); 
Alpine.plugin(intersect);
window.Alpine = Alpine
Alpine.start()

import { initSlick } from './plugins/slick'; // slick slider is the only plugin that uses jquery right now

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
  if (typeof initSlick === 'function') initSlick();
  // if (typeof initDatepicker === 'function') initDatepicker();
};

document.addEventListener('DOMContentLoaded', () => {
  const event = new Event('_page_ready');
  document.dispatchEvent(event);
});

document.addEventListener('_page_ready', onDocumentReady);