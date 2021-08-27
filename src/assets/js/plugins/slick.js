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

      $this.slick({
        slidesToScroll: 1,
        rows: 0,
        prevArrow: '<button class="slick-prev arrow arrow--prev">Previous</button>',
        nextArrow: '<button class="slick-next arrow arrow--next">Next</button>',
        dots: true,
        mobileFirst: true,
        dotsClass: 'slick-dots',
        appendArrows: $this.next('.slick-nav'),
        appendDots: $this.next('.slick-nav'),
        adaptiveHeight: true,
        waitForAnimate: false,
        responsive: [
          {
            breakpoint: mediumBreakpoint,
            settings: 'unslick'
          }
        ]
      });

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
      //console.log($this.get(0).slick.paused);
      if ($this.get(0).slick.paused){
        $this.slick('slickPlay').removeClass('is-paused');
      }else{
        $this.slick('slickPause').addClass('is-paused');
      }
    })

    $this.slick({
      slidesToScroll: 1,
      rows: 0,
      lazyLoad: 'progressive',
      prevArrow: '<button class="slick-prev arrow arrow--prev">Previous</button>',
      nextArrow: '<button class="slick-next arrow arrow--next">Next</button>',
      dots: true,
      dotsClass: 'slick-dots',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      adaptiveHeight: true,
      waitForAnimate: false
    });

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

    $this.slick({
      slidesToScroll: 3,
      slidesToShow: 3,
      rows: 0,
      prevArrow: '<button class="slick-prev arrow arrow--prev">Previous</button>',
      nextArrow: '<button class="slick-next arrow arrow--next">Next</button>',
      dots: true,
      infinite: true,
      dotsClass: 'slick-dots',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      adaptiveHeight: true,
      waitForAnimate: false,
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
      prevArrow: '<button class="slick-prev arrow arrow--prev">Previous</button>',
      nextArrow: '<button class="slick-next arrow arrow--next">Next</button>',
      dots: true,
      infinite: false,
      dotsClass: 'slick-dots',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      variableWidth: true,
      //adaptiveHeight: false,
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

  });

}

$(document).ready(function(){
  initSlick(); // @slick init call
});
