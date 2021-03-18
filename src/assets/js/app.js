import 'slick-carousel';
import $ from 'jquery';
import 'lity';
import './lib/foundation-explicit-pieces';
import tippy from 'tippy.js';
import LazyLoad from 'vanilla-lazyload';
import Litepicker from 'litepicker';
import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../_patterns/global/base/breakpoints.json';

$(document).foundation();

// $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
//   // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
// });

const randomId = () => {
  return Math.random().toString(36).substr(2, 9);
}

const initDatepicker = () => {
  $('.js-date').each(function(){
    new Litepicker({
      element: $(this)[0]
    });
  })
}

const initLityAccessibility = () => {
  const dataAttr = 'trigger';
  $(document).on('click', '[data-lity]', function(event) {
    const $trigger = $(this);
    let triggerId = $trigger.attr('id');
    if (!triggerId){
      triggerId = 'lity-' + randomId();
      $trigger.attr('id', triggerId);

    }
    $('.lity').attr('data-' + dataAttr,triggerId);
  });

  $(document).on('lity:close', function(event, instance) {
    const $lity = instance.element();
    const $trigger = $('#'+$lity.data(dataAttr));
    $trigger.focus();
  });
}



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


function slickPagination(slick){
  if (slick.$dots){
    const numSlides = slick.$dots.find('>li').length;
    slick.$slider.toggleClass('has-pagers', numSlides > 1);
    slick.$slider.toggleClass('has-pagination', numSlides > 3);
  }
}

const initTippy = () => {
  var tippies = document.querySelectorAll("[data-tippy-content]");
  tippy(tippies, {
    hideOnClick: false,
    animation: "shift-away",
    arrow: true,
    //trigger: "click",
    interactive: true,
    offset: [0,-5],
    maxWidth: 600,
    placement: "bottom",
    onShow: function(tippyElem){
      var tempDom = $('<div>').append($.parseHTML(tippyElem.reference.dataset.tippyContent))[0];
      tippyElem.setContent(tempDom);
    },
    onShown: function (tippyElem) {
      tippyElem.reference.classList.add("tippy-active");
    },
    onHidden: function (tippyElem) {
      tippyElem.reference.classList.remove("tippy-active");
    },
    onMount: function (tippyElem) {
      var elem = tippyElem;


      if (!elem.reference.classList.contains("tippy-initialized")) {
        $(elem.popper)
          .find(".tippy-tooltip")
          .prepend(
            "<button class='tippy-close'><span class='show-for-sr'>Close tooltip</span></button>"
          );
        $(elem.popper)
          .find(".tippy-close")
          .on("click", function (event) {
            elem.hide();
            return false;
          });

        elem.reference.addEventListener(
          "touchstart",
          function (event) {
            //console.log(elem);
            if (elem.state.isVisible) {
              elem.setProps({
                trigger: "manual",
              });
              elem.hide();
            } else {
              elem.setProps({
                trigger: "focus mouseenter",
              });
              elem.show();
            }
          },
          false
        );
      }
      elem.reference.classList.add("tippy-initialized");
    },
  });
}

const initLazy = () => {
  new LazyLoad({
    elements_selector: ".js-lazy"
    // ... more custom settings?
  });
}

const initSlick = () => {

  const $slick = $('.js-slick');

  $slick.each(function(){
    const $this = $(this);

    $this.on('init', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    $this.on('breakpoint', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    $this.slick({
      slidesToScroll: 1,
      rows: 0,
      prevArrow: '<button class="slick-prev">Previous</button>',
      nextArrow: '<button class="slick-next">Next</button>',
      dots: true,
      dotsClass: 'slick-dots',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      adaptiveHeight: true,
      waitForAnimate: false
    });

  })

  const $slickCards = $('.js-slick--cards');

  console.log(Foundation.MediaQuery.queries);
  $slickCards.each(function(){
    const $this = $(this);

    $this.on('init', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    $this.on('breakpoint', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    $this.slick({
      slidesToScroll: 3,
      slidesToShow: 3,
      rows: 0,
      prevArrow: '<button class="slick-prev">Previous</button>',
      nextArrow: '<button class="slick-next">Next</button>',
      dots: true,
      infinite: false,
      dotsClass: 'slick-dots',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      adaptiveHeight: true,
      waitForAnimate: false,
      responsive: [
        {
        breakpoint: largeBreakpoint,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
        {
        breakpoint: mediumBreakpoint,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1

        }

      }
      ]
    });

  });

  const $slickCenter = $('.js-slick--center');
  $slickCenter.each(function(){
    const $this = $(this);

    $this.on('init', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    $this.on('breakpoint', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    $this.slick({
      centerMode: true,
      centerPadding: '50px',
      prevArrow: '<button class="slick-prev">Previous</button>',
      nextArrow: '<button class="slick-next">Next</button>',
      dots: true,
      infinite: false,
      dotsClass: 'slick-dots',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      variableWidth: true,
      waitForAnimate: true,
      responsive: [
        {
        breakpoint: '500',
        settings: {
          adaptiveHeight: true
        }
        }
      ]
    });

  });

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

  initTippy();
  initLazy();
  initSlick();
  initLityAccessibility();
  initDatepicker();


})

