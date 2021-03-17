import 'slick-carousel';
import $ from 'jquery';
import Lity from 'lity';
import './lib/foundation-explicit-pieces';
import tippy from 'tippy.js';
import LazyLoad from 'vanilla-lazyload';

//$(document).on('click', '[data-lity]', lity);

$(document).foundation();

$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
});


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
      var targetHash = this.hash.substring(1);
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


function sliderPagination(slick){
  if (slick.$dots){
    const numSlides = slick.$dots.find('>li').length;
    slick.$slider.toggleClass('slider-pagers', numSlides > 1);
    slick.$slider.toggleClass('slider-pagination', numSlides > 3);
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

const initSlider = () => {

  const $slider = $('.js-slider');

  $slider.each(function(){
    const $this = $(this);

    $this.on('breakpoint', function (event, slick, breakpoint){
      sliderPagination(slick);
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
  initSlider();


})

