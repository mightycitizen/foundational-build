//import "babel-polyfill"; // ie 11 polyfill - can exclude if not in scope
import $ from 'jquery';
import Alpine from 'alpinejs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect';

Alpine.plugin(focus);
Alpine.plugin(intersect);
window.Alpine = Alpine
Alpine.start()

//import LazyLoad from 'vanilla-lazyload'; // @lazy lazy image and iframe loading
// import loaderTemplate from '../../stories/components/utils/loader/loader.twig'; // used with @forms
// import { initTippy } from './plugins/tippy';
// import { initAjax } from './plugins/ajaxify';

// import { initLity } from './plugins/lity';
// import { initDatepicker } from './plugins/datepicker';
import { initSlick } from './plugins/slick';
// import { initAnchor } from './plugins/sticky-anchor';

window.$ = $;
// //import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../stories/global/base/breakpoints.json'; // Foundation breakpoints

// window.jQuery = $;

// // CLASS DEFINITIONS

// // INITIALIZATION FUNCTIONS

// // @select-url init
// const initSelectUrl = () => {
//   $(document).on('change', '.js-selectUrl', e => {
//     //alert('test2');
//     var url = e.target.value; // get selected value
//     if (url) { // require a URL
//         window.location = url; // redirect
//     }
//     return false;
//   })
// }

// // @form helpers init
// const initFormHelpers = () => {
//   $('form.js-ajax').find('select, input').on('change', function(){
//     $(this).closest('form').trigger('submit');
//   })
//   $('[data-clear]').each(function(){
//     const $field = $('#'+$(this).data('clear'));
//     $field.on('change', function(){
//       $(this).toggleClass('is-active', $field.val() !== '');
//     })
//     $(this).on('click', function(){
//       if ($field) $field.val('').trigger('change');
//     })
//   });


// }

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

// // @anchor update

// const initAnchorUpdate = () => {
//   if ($('.anchormenu.sticky').length){
//     $(window).on('scroll', Foundation.util.throttle(function(){
//       let activeAnchor;
//       $('.anchormenu a').each(function(){
//         const $anchor = $(this);
//         const $section = $($anchor.attr('href'));
//         if ($section && !$('html').hasClass('is-scrolling')){
//           if ($section.isInViewport()){
//             //activeSection = $section;
//             activeAnchor = $anchor;
//           }else{
//             $section.removeClass('is-active');
//           }
//         }
//       });
//       if (activeAnchor){
//         activeAnchor.parent().addClass('is-active').siblings().removeClass('is-active');
//         const $anchorMenu = activeAnchor.closest('.anchormenu');
//         $anchorMenu.find('.dropdown_toggle').text(activeAnchor.text());
//       }
//     },50));
//   }
// }


// // create separate document ready method so that we can call it from other scripts e.g. storybook
$(document).bind('_page_ready', function(){

//   // ↑ True for "medium" or larger (by default)
//   //Foundation.MediaQuery.is('medium up');
//   //Foundation.MediaQuery.atLeast('medium');

//   // → True for "medium" only
//   //Foundation.MediaQuery.is('medium only');
//   //Foundation.MediaQuery.only('medium');

//   // ↓ True for "medium" or larger
//   //Foundation.MediaQuery.is('medium down');
//   //Foundation.MediaQuery.upTo('medium');

  // initLazy(); // @lazy init call
//   initAnchorUpdate(); // @anchor update init
  initTableScroll(); // @table-scroll init call
  initSmoothScroll(); // @smooth-scroll init

//   initSelectUrl(); // @select-url init
//   // RUN INITS

//   initFoundationHelpers(); // @foundation helpers init


  if (typeof initSlick === 'function') initSlick(); // @slick init call
//   if (typeof initDatepicker === 'function') initDatepicker(); // @datepicker init call
//   if (typeof initAjax === 'function') initAjax(); // @ajax init call
//   if (typeof initLity === 'function') initLity(); // @lity init call
//   if (typeof initSlider === 'function') initSlider(); // @slider init call
//   if (typeof initAnchor === 'function') initAnchor(); // @scrollshow init call
});

$(document).ready(function(){
  $(document).trigger('_page_ready');
});
// $(document).foundation();


