import 'slick-carousel';
import $ from 'jquery';
import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../../_patterns/global/base/breakpoints.json'; // Foundation breakpoints

// @slick pagination helper function
const slickPagination = (slick) => {
  if (slick.$dots){
    const numSlides = slick.$dots.find('>li').length;
    slick.$slider.toggleClass('has-pagers', numSlides > 1);
    //slick.$slider.toggleClass('has-pagination', numSlides > 3);
  }else{
    slick.$slider.removeClass('has-pagers');
  }
}

const defaultOptions = {
  slidesToScroll: 1,
  rows: 0,
  lazyLoad: 'progressive',
  prevArrow: '<button class="slick-prev arrow arrow--prev">Previous</button>',
  nextArrow: '<button class="slick-next arrow arrow--next">Next</button>',
  dots: true,
  dotsClass: 'slick-dots',
  adaptiveHeight: true,
  waitForAnimate: false
}

// @slick init
const initSlick = () => {

  // @slick mobile init
  const initSlickMobile = () => {
    const $slickMobile = $('.js-slick--mobile');

    $slickMobile.each(function(){
      const $this = $(this);

      $this.on('init', function (event, slick, breakpoint){
        slickPagination(slick);
      })

      $this.on('breakpoint', function (event, slick, breakpoint){
        slickPagination(slick);
      })
      const slickOptions = $.extend({}, defaultOptions, {
        mobileFirst: true,
        appendArrows: $this.next('.slick-nav'),
        appendDots: $this.next('.slick-nav'),
        responsive: [
          {
            breakpoint: mediumBreakpoint,
            settings: 'unslick'
          }
        ]
      });
      $this.slick(slickOptions);
    })

  }
  initSlickMobile();
  // @foundation breakpoint event trigger
  $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {

    // @slick mobile reinit
    if (newSize === 'small') initSlickMobile();

  });



  const $slick = $('.js-slick');

  $slick.each(function(){
    const $this = $(this);

    $this.on('init', function (event, slick, breakpoint){
      slickPagination(slick);
      $this.trigger('resizeme.zf.trigger');
    })

    $this.on('breakpoint', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    // pause/play
    $this.next('.slick-nav').find('.js-slick-toggle').on('click', function(){
      if ($this.get(0).slick.paused){
        $this.slick('slickPlay').removeClass('is-paused');
      }else{
        $this.slick('slickPause').addClass('is-paused');
      }
    })
    const slickOptions = $.extend({}, defaultOptions, {
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
    });
    $this.slick(slickOptions);

  })

  const $slickCards = $('.js-slick--cards');

  $slickCards.each(function(){
    const $this = $(this);

    $this.on('init', function (event, slick, breakpoint){
      slickPagination(slick);
      $this.trigger('resizeme.zf.trigger');
    })

    $this.on('breakpoint', function (event, slick, breakpoint){
      slickPagination(slick);
    })

    const slickOptions = $.extend({}, defaultOptions, {
      slidesToScroll: 3,
      slidesToShow: 3,
      infinite: true,
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      responsive: [
        {
        breakpoint: largeBreakpoint,
        settings: {
          //adaptiveHeight: true,
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
        {
        breakpoint: mediumBreakpoint,
        settings: {
          //adaptiveHeight: true,
          slidesToScroll: 1,
          slidesToShow: 1

        }

      }
      ]
    });

    $this.slick(slickOptions);

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

    const slickOptions = $.extend({}, defaultOptions, {
      centerMode: true,
      centerPadding: '50px',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      variableWidth: true,
      waitForAnimate: true,
      responsive: [
        {

          breakpoint: mediumBreakpoint,
          settings: {
            centerMode: false,
            centerPadding: 0,
            variableWidth: false,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1

          }

        }
      ]
    });

    $this.slick(slickOptions);

  });

}

$(document).ready(function(){
  initSlick(); // @slick init call
});
