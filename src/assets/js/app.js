import "babel-polyfill"; // ie 11 polyfill - can exclude if not in scope
import $ from 'jquery';
import './lib/foundation-explicit-pieces'; // @foundation pick and choose Foundation plugins

import LazyLoad from 'vanilla-lazyload'; // @lazy lazy image and iframe loading
import loaderTemplate from '../../_patterns/components/utils/loader.twig'; // used with @forms

import './plugins/slider';
import './plugins/tippy';
import './plugins/ajaxify';
import './plugins/selectize';
import './plugins/lity';
import './plugins/datepicker';
import './plugins/video';
import './plugins/slick';

//import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../_patterns/global/base/breakpoints.json'; // Foundation breakpoints


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
    elem.prop('disabled', true).append(loaderTemplate);
  }

  window.enableSubmit = (elem) => {
    elem.prop('disabled', false).find('.loader').remove();
  }

  $('form:not([data-abide]):not([data-freeform])').on('submit', function(){
    disableSubmit($(this).find('[type="submit"]:not(.fui-btn)'));
  })
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
        }, 500);

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

$(document).ready(function(){

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
  initFoundationAccessibility();  // @foundation init accessibility call
  initTableScroll(); // @table-scroll init call

  initSmoothScroll(); // @smooth-scroll init
  initMenuHelpers(); // @menu helpers
  initFormHelpers(); // @form helpers init\

  initSkipTo(); // @skip-to init
  initSelectUrl(); // @select-url init
})

// @foundation init
$(document).foundation();
