import "babel-polyfill"; // ie 11 polyfill - can exclude if not in scope
import $ from 'jquery';


import './lib/foundation-explicit-pieces'; // @foundation pick and choose Foundation plugins

import LazyLoad from 'vanilla-lazyload'; // @lazy lazy image and iframe loading
import loaderTemplate from '../../stories/components/utils/loader.twig'; // used with @forms

import { initSlider } from './plugins/slider';
import { initTippy } from './plugins/tippy';
import { initAjax } from './plugins/ajaxify';
import { initSelectize } from './plugins/selectize';
import { initLity } from './plugins/lity';
import { initDatepicker } from './plugins/datepicker';
import { initVimeo } from './plugins/vimeo';
import { initYoutube } from './plugins/youtube';
import { initSlick } from './plugins/slick';
import { initScrollShow } from './plugins/scroll-show';
import { initCountdown } from './plugins/countdown';
import { initAnchor } from './plugins/sticky-anchor';

window.$ = $;
//import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../stories/global/base/breakpoints.json'; // Foundation breakpoints

window.jQuery = $;

// CLASS DEFINITIONS

// INITIALIZATION FUNCTIONS

// @skip-to init
const initSkipTo = () => {
  $(document).on('click', '.l-skip', function(e) {
    e.preventDefault();
    const targetId = $(this).attr('href');
    const $target = $(targetId);
    const $first = $target.find(':header:first') || null;
    if ($first) $target.find(':header:first').attr('tabindex', '-1').focus();
  });
}

// @select-url init
const initSelectUrl = () => {
  $(document).on('change', '.js-selectUrl', e => {
    //alert('test2');
    var url = e.target.value; // get selected value
    if (url) { // require a URL
        window.location = url; // redirect
    }
    return false;
  })
}

// @form helpers init
const initFormHelpers = () => {
  $('form.js-ajax').find('select, input').on('change', function(){
    $(this).closest('form').trigger('submit');
  })
  $('[data-clear]').each(function(){
    const $field = $('#'+$(this).data('clear'));
    $field.on('change', function(){
      $(this).toggleClass('is-active', $field.val() !== '');
    })
    $(this).on('click', function(){
      if ($field) $field.val('').trigger('change');
    })
  });

  const disableSubmit = (elem) => {
    if (!elem.is(':disabled')) elem.prop('disabled', true).append(loaderTemplate).addClass('is-loading');
  }

  window.enableSubmit = (elem) => {
    elem.prop('disabled', false).find('.loader').remove();
  }

  $('form:not([data-abide]):not([data-freeform])').on('submit', function(){
    disableSubmit($(this).find('[type="submit"]:not(.fui-btn)'));
  })
  $('[data-abide]').on('forminvalid.zf.abide', function(){
    $('html, body').animate({
      scrollTop: $(this).find('.is-invalid-input').first().parent().offset().top
    }, 500);
  });
  $('[data-abide]').on('formvalid.zf.abide', function(){
    disableSubmit($(this).find('[type="submit"]:not(.fui-btn)'));
  });
}

// @smooth-scroll init
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


// @table-scroll init
const initTableScroll = () => {
  $('table').each(function(){
    if (!$(this).closest('.table-scroll').length){
      $(this).wrap('<div class="table-scroll-wrapper"></div>');
      $(this).wrap('<div class="table-scroll"></div>');
    }
  })
  $('.table-scroll').on('scroll', function() {
    const $wrapper = $(this).parent();
    $wrapper.toggleClass('is-end',$(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth);
    // if() {
    //   $wrapper.addClass('is-end')
    // }else{
    //   $wrapper.removeClass('is-end')
    // }
  });
}

// @foundation helpers init
const initFoundationHelpers = () => {
  $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    $('body').removeClass('has-menu');
  });

  $('[data-dropdown-trigger]').on('click', 'a', function(e){
    e.preventDefault();
    const text = $(e.target).text();
    const $dropdown = $(this).closest('[data-dropdown-trigger]');
    const dropdownId = $dropdown.attr('id');
    const $toggle = $('[data-toggle="'+dropdownId+'"]');
    $toggle.text(text);
    $dropdown.foundation('close');
    // console.log(dropdownId);
    // console.log(text);
    // console.log($toggle);
  })
  $(document).on('change.zf.tabs', function(e, tab, pane, $target){
    const tabNav = $(tab).parent();
    if ($(tab).length){
      const tabStartPosition = $(tab).position().left;
      const tabNavWidth = tabNav.outerWidth();
      const tabWidth = $(tab).outerWidth();
      const tabEndPosition = tabStartPosition + tabWidth;
      const offset = 30;
      let position;
      const currPosition = tabNav.scrollLeft();
      // console.log(currPosition);
      // console.log('left',tabStartPosition);
      // console.log('right',tabEndPosition);
      if (tabStartPosition < offset){
        position = currPosition + tabStartPosition - offset;
      }
      else if (tabEndPosition > tabNavWidth - offset){
        position = currPosition + (tabEndPosition - tabNavWidth + offset);
        //console.log(position);
      }

      if (position){
        $(tabNav).animate({
          scrollLeft: position
        },200);
      }
    }

    // console.log(tab);
    // console.log(pane);
    // console.log($target);
    //alert('test');
  });
}

// @anchor update

const initAnchorUpdate = () => {
  if ($('.anchormenu.sticky').length){
    $(window).on('scroll', Foundation.util.throttle(function(){
      let activeAnchor;
      $('.anchormenu a').each(function(){
        const $anchor = $(this);
        const $section = $($anchor.attr('href'));
        if ($section && !$('html').hasClass('is-scrolling')){
          if ($section.isInViewport()){
            //activeSection = $section;
            activeAnchor = $anchor;
          }else{
            $section.removeClass('is-active');
          }
        }
      });
      if (activeAnchor){
        activeAnchor.parent().addClass('is-active').siblings().removeClass('is-active');
        const $anchorMenu = activeAnchor.closest('.anchormenu');
        $anchorMenu.find('.dropdown_toggle').text(activeAnchor.text());
      }
    },50));
  }
}


// @foundation accessibility init
const initFoundationAccessibility = () => {
  // accordion accessibility
  $(document).on('click', '.accordion-trigger', function(event){
    $(this).parents('.accordion-item').find('.accordion-title').trigger('click');
  })
}

// @lazy init
const initLazy = () => {
  window.lazyLoad = new LazyLoad({
    elements_selector: ".js-lazy"
    // ... more custom settings?
  });
}

// @menu helpers
const initMenuHelpers = () => {
  const menuId = 'responsive-menu';
  $(document).on('toggled.zf.responsiveToggle',e => {
    if (e.target.dataset.responsiveToggle === menuId){
      $('body').toggleClass('has-menu', $('#'+menuId).is(':visible'));
    }
  });
  const activeSelector = '.js-dropdown-active';
  const grandchildClass = 'has-grandchild';
  $('#' + menuId).on('show.zf.dropdownMenu', e => {
    const $menu = $(e.target);
    const $activeChild = $menu.find(activeSelector).first();
    const $activeGrandchild = $activeChild.find(activeSelector);
    if ($activeGrandchild.is(':visible')){
      $activeChild.css('min-height', $activeGrandchild.outerHeight()).addClass(grandchildClass);
      if ($activeGrandchild.parent().hasClass('opens-left')) $activeChild.addClass('child-opens-left');
    }else{
      $activeChild.css('min-height', 0).removeClass(grandchildClass).removeClass('child-opens-left');
    }
  }).on('hide.zf.dropdownMenu', e => {
    const $menu = $(e.target);

    $menu.find('.'+grandchildClass).removeClass(grandchildClass).css('min-height',0);
  })
}

// create separate document ready method so that we can call it from other scripts e.g. storybook
$(document).bind('_page_ready', function(){

  // ↑ True for "medium" or larger (by default)
  //Foundation.MediaQuery.is('medium up');
  //Foundation.MediaQuery.atLeast('medium');

  // → True for "medium" only
  //Foundation.MediaQuery.is('medium only');
  //Foundation.MediaQuery.only('medium');

  // ↓ True for "medium" or larger
  //Foundation.MediaQuery.is('medium down');
  //Foundation.MediaQuery.upTo('medium');

  initLazy(); // @lazy init call
  initAnchorUpdate(); // @anchor update init
  initFoundationAccessibility();  // @foundation init accessibility call
  initTableScroll(); // @table-scroll init call

  //initScrollHide(); // @scroll-hide init call
  initSmoothScroll(); // @smooth-scroll init
  initMenuHelpers(); // @menu helpers
  initFormHelpers(); // @form helpers init\

  initSkipTo(); // @skip-to init
  initSelectUrl(); // @select-url init
  // RUN INITS

  initFoundationHelpers(); // @foundation helpers init


  if (typeof initSlick === 'function') initSlick(); // @slick init call
  if (typeof initDatepicker === 'function') initDatepicker(); // @datepicker init call
  if (typeof initSlider === 'function') initSlider(); // @slider init call
  if (typeof initTippy === 'function') initTippy(); // @tippy init call
  if (typeof initAjax === 'function') initAjax(); // @ajax init call
  if (typeof initVimeo === 'function') initVimeo(); // @vimeo init call
  if (typeof initYoutube === 'function') initYoutube(); // @youtube init call
  if (typeof initLity === 'function') initLity(); // @lity init call
  if (typeof initSlider === 'function') initSlider(); // @slider init call
  if (typeof initSelectize === 'function') initSelectize(); // @slider init call
  if (typeof initScrollShow === 'function') initScrollShow(); // @scrollshow init call
  if (typeof initCountdown === 'function') initCountdown(); // @scrollshow init call
  if (typeof initAnchor === 'function') initAnchor(); // @scrollshow init call
});

$(document).ready(function(){
  $(document).trigger('_page_ready');
});
$(document).foundation();


