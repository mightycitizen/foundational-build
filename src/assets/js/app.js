
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR")
  });
}

import '../css/output.css'; // tailwind
import '../icomoon/style.css'; // icomoon
import '../../../node_modules/slick-carousel/slick/slick.css'; // slick slider css

import $ from 'jquery';
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect';

Alpine.plugin(focus); 
Alpine.plugin(intersect);
window.Alpine = Alpine
Alpine.start()

import { initSlick } from './plugins/slick'; // slick slider is the only plugin that uses jquery right now

window.$ = $;
// // @smooth-scroll init
const initSmoothScroll = () => {
  // In-page smooth scroll, exclude from modal windows
  $(document).on('click', 'a[href^="#"]:not([href="#"]):not([data-lity])',
  function(event) {
    // On-page links
    event.preventDefault();
    $('html').addClass('is-scrolling');
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      //var targetHash = this.hash.substring(1);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, null, function(){
          $('html').removeClass('is-scrolling');
        });

      }
    }
  });
}


// // @table-scroll init
const initTableScroll = () => {  
  $('table').each(function(){
    if (!$(this).closest('.table-scroll').length){
      $(this).wrap('<div class="table-scroll_wrapper"></div>');
      $(this).wrap('<div class="table-scroll"></div>');
    }
  })
  $('.table-scroll').on('scroll', function() {
    const $wrapper = $(this).parent();
    $wrapper.toggleClass('is-end',$(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth);

  });
}


// // create separate document ready method so that we can call it from other scripts e.g. storybook
$(document).bind('_page_ready', function(){

  initTableScroll(); // @table-scroll init call
  initSmoothScroll(); // @smooth-scroll init

  if (typeof initSlick === 'function') initSlick(); // @slick init call
//   if (typeof initDatepicker === 'function') initDatepicker(); // @datepicker init call
});

$(document).ready(function(){
  $(document).trigger('_page_ready');
});

