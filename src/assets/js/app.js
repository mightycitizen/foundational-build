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
import './plugins/youtube';
import './plugins/vimeo';
import './plugins/sticky-anchor';
import './plugins/slick';

class Countdown {
  constructor(selector){
    this.options = {
      dateAttr: 'data-countdown',
      daysSelector: '[data-countdown-property="days"]',
      hoursSelector: '[data-countdown-property="hours"]',
      minutesSelector: '[data-countdown-property="min"]',
      secondsSelector: '[data-countdown-property="sec"]',
    }

    this.$holder = $(selector);
    this.date = this.$holder.attr(this.options.dateAttr) * 1000;
  }
  timer(){
    const self = this;
    var countDownDate = new Date(this.date).getTime();
    //console.log(countDownDate);
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        //console.log(now);

        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        //console.log(distance);
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        // console.log(hours);
        // console.log(minutes);
        const formatString = (string) => {
          return string.toString().padStart(2, '0');
        }
        self.$holder.find(self.options.daysSelector).text(formatString(days >= 0 ? days : 0));
        self.$holder.find(self.options.hoursSelector).text(formatString(hours >= 0 ? hours : 0));
        self.$holder.find(self.options.minutesSelector).text(formatString(minutes >= 0 ? minutes : 0));
        self.$holder.find(self.options.secondsSelector).text(formatString(seconds >= 0 ? seconds : 0));


        // If the count down is over, write some text
        if (distance <= 0) {
            clearInterval(x);
            //window.location.reload();
        }
    }, 1000);
    }

  init(){
    this.timer()
  }
}

//import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../_patterns/global/base/breakpoints.json'; // Foundation breakpoints

window.jQuery = $;

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

const initScrollHide = () => {
  $(window).on('scroll', Foundation.util.throttle(function(e){

    $('[data-scroll-hide],[data-scroll-show]').each(function(){
      let scrollClass = 'is-inactive';
      let attribute = 'data-scroll-hide';
      if ($(this).attr('data-scroll-show')){
        attribute = 'data-scroll-show';
        scrollClass =  'is-active';
      }
      let scrollTrigger = $(window).scrollTop() + $(window).height()/2 > $(this).offset().top;
      if ($(this).attr(attribute) > 0) scrollTrigger = $(window).scrollTop() > $(this).attr(attribute);
      $(this).toggleClass(scrollClass,scrollTrigger);
    });
  }, 300));

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


// @countdown init
const initCountdown = () => {
  const countdownInstance = new Countdown('[data-countdown]');
  countdownInstance.init();

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
  $(document).on('change.zf.tabs', function(e, tab, pane, $target){
    const tabNav = $(tab).parent();
    //console.log(tabNav);
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
    // console.log(tab);
    // console.log(pane);
    // console.log($target);
    //alert('test');
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

  initScrollHide(); // @scroll-hide init call
  initSmoothScroll(); // @smooth-scroll init
  initMenuHelpers(); // @menu helpers
  initFormHelpers(); // @form helpers init\

  initSkipTo(); // @skip-to init
  initSelectUrl(); // @select-url init

  initCountdown();
  initFoundationHelpers(); // @foundation helpers init
})

// @foundation init
$(document).foundation();
