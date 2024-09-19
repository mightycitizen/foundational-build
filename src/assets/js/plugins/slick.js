import 'slick-carousel';
import $ from 'jquery';
import { breakpoints } from '../../../stories/global/base/breakpoints.json'; // Foundation breakpoints


//console.log(breakpoints);
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
const slickPause = ($slick) => {
  //const $slider = $(slick.$slider);
  const $toggleElem = $('[data-slick-pause="' + $slick.attr('id') + '"]');
  // pause/play
  $toggleElem.on('click', function(){
    const slick = $slick.get(0).slick;
    if (slick.paused){
      $slick.slick('slickPlay').removeClass('is-paused');
    }else{
      $slick.slick('slickPause').addClass('is-paused');
    }
    slickProgress(slick);
  })

}

const slickBackground = (slick, next) => {
  const $slider = $(slick.$slider);
  if (slick.$slides && slick.$slides[next]){
    const background = $(slick.$slides[next]).data('slick-background');
    if (background){
      const currBackgroundElem = $('[data-slick-background="' + $slider.attr('id') + '"]');


      if (currBackgroundElem){
      currBackgroundElem.addClass('is-hidden');
      if (background){
        $slider.addClass('has-background');

        let nextBackgroundElem = currBackgroundElem.siblings('[data-slick-background-index="' + next + '"]');
        if (nextBackgroundElem.length === 0){
          nextBackgroundElem = currBackgroundElem.last().clone();
          currBackgroundElem.last().after(nextBackgroundElem);
          nextBackgroundElem.attr('src', background).attr('data-slick-background-index',next);
        }

        setTimeout(() => {
          nextBackgroundElem.removeClass('is-hidden');
        }, 50);
      }else{
        $slider.removeClass('has-background');
      }


      }
    }

  }
  //console.log(event);
  // if (event){
  //   const slickId = event.$slider.attr('id');
  //   var el = $('.slick_background[data-slick="' + slickId + '"]');
  // }else{
  //   var el = $('.slick_background');
  // }
  // if (el.length){
  //   var elem = el.find('.slick_background_image');
  //   elem.css({
  //     backgroundImage: 'url(' + elem.attr('data-bg') + ')'
  //   });
  // }
}


const slickProgress = (slick, reset, init) => {

  const slickId = slick.$slider.attr('id');
  var el = $('.slick_progress[data-slick="' + slickId + '"]');
  //const delay = init ? -0.5*slick.options.speed : slick.options.speed;
  if (el.length){
    var elem = el.find('.slick_progress_line');
    elem.css({
      width: 0,
      transition: 'none'
    });
    if ((!reset && !slick.paused) || init){
      setTimeout(function(){
        //console.log(delay);
        elem.css({
          transition: 'width ' + (slick.options.autoplaySpeed) + 'ms linear'
        });
        setTimeout(function(){
          elem.css({
            width: '100%'
          });
        }, 5)
      }, 5)

    }

  }


}

const slickGo = (slick, next) => {
  //console.log(next);
  const $slick = $(slick.$slider);
  const slickId = $slick.attr('id');
  const $slickGo = $('[data-slick-go="' + slickId + '"][data-slick-go-index="' + next + '"]');
  if ($slickGo.length){
    $slickGo.parent().addClass('is-active').siblings().removeClass('is-active');
  }
}

const slickTabs = (slick, cur) => {
  //console.log(cur);
  const $slick = $(slick.$slider);
  const slickId = $slick.attr('id');
  const $slickTabs = $('[data-slick="' + slickId + '"][data-slick-tabs]');
  if ($slickTabs.length > 0){
    const $slickTab = $slickTabs.find('.is-active');
    $slickTabs.parent().toggleClass('is-start',cur === 0);
    $slickTabs.parent().toggleClass('is-end',cur === slick.slideCount - 1);
    if ($slickTab.length > 0){
      const tabStartPosition = $slickTab.position().left;
      const tabNavWidth = $slickTabs.outerWidth();
      const tabWidth = $slickTab.outerWidth();
      const tabEndPosition = tabStartPosition + tabWidth;
      const offset = 80;
      let position;
      const currPosition = $slickTabs.scrollLeft();
      // // console.log(currPosition);
      // // console.log('left',tabStartPosition);
      // // console.log('right',tabEndPosition);
      if (tabStartPosition < offset){
        position = currPosition + tabStartPosition - offset;
      }
      else if (tabEndPosition > tabNavWidth - offset){
        position = currPosition + (tabEndPosition - tabNavWidth + offset);
        //console.log(position);
      }

      if (position){
        $slickTabs.animate({
          scrollLeft: position
        },200);
      }
    }
  }


}


const slickEvents = ($slick) => {
  const slickActiveClass = 'slick-primary';
  $slick.on('init', function (event, slick, breakpoint){
    //console.log(slick);
    slickPagination(slick);
    slickGo(slick, 0);
    slickProgress(slick, false, true);
    slickBackground(slick, 0);
    $slick.trigger('resizeme.zf.trigger');
  })

  $slick.on('breakpoint', function (event, slick, breakpoint){
    slickPagination(slick);
    $slick.trigger('resizeme.zf.trigger');
  })
  $slick.on('afterChange', function(event, slick, cur, next){
    slickProgress(slick);
    slickTabs(slick, cur);
    const slideCount = slick.$slides.length - 1
    const loopEnd = cur === slideCount;
    const loopStart  = cur === 0;


    if (loopEnd) {
      const $activeSlide = $(slick.$slides[0]);
      $activeSlide.prev('.slick-slide').addClass(slickActiveClass);
    }
    if (loopStart) {
      const $activeSlide = $(slick.$slides[slideCount]);
      $activeSlide.next('.slick-slide').addClass(slickActiveClass);
    }
    $(slick.$slides[cur]).addClass(slickActiveClass);



    setTimeout(() => {
      $('.slick-clone-current').addClass('slick-animate');
      $(slick.$slides[cur]).addClass('slick-animate');
      slick.$slider.find('.slick-slide').removeClass('slick-animating');

    }, 5);
  })
  $slick.on('beforeChange', function(event, slick, cur, next){
    slickGo(slick, next);
    slickBackground(slick, next);
    slickProgress(slick, true);
    $('.' + slickActiveClass).removeClass(slickActiveClass);
    // slick active class start
    // slick active class end

    // animating class to hide elements within slide during transition
    slick.$slider.find('.slick-slide').addClass('slick-animating');

    setTimeout(() => {
      // class to key animations within slide
      slick.$slider.find('.slick-slide').removeClass('slick-animate');
    }, 5);
  })
}

const arrowClass = 'aspect-square bg-primary hover:bg-primary-700 text-white rounded-full w-10 flex items-center justify-center';
const mobilePager = false;
const defaultOptions = {
  slidesToScroll: 1,
  rows: 0,
  lazyLoad: 'progressive',
  prevArrow: `<button class="slick-prev ${arrowClass}"><span class="icon-chevron-left"></span><span class="sr-only">Previous</span></button>`,
  nextArrow: `<button class="slick-next ${arrowClass}"><span class="icon-chevron-right"></span><span class="sr-only">Next</span></button>`,
  dots: true,
  dotsClass: 'slick-dots list-none mb-0 px-5 md:px-8 flex justify-center ' + (mobilePager ? 'md:gap-x-5' : 'gap-x-3 md:gap-x-5'),
  adaptiveHeight: true,
  waitForAnimate: false,
  customPaging : function(slider, i) {
    let dotClasses = 'w-4 md:w-6 aspect-square rounded-full bg-primary border-2 border-primary';
    if (mobilePager){
      dotClasses = '!text-sm md:w-6 md:h-6 md:rounded-full md:bg-primary md:border-2 md:border-primary ' + (i === 0 || i === slider.slideCount - 1 ? '' : '!hidden md:!block');
    }    

    return `<button class="${dotClasses}"><span class="md:hidden">${i === slider.slideCount - 1 ? '<span class="ml-1">of </span>' : '' }${ i + 1 }</span></button>`;
  }
}

const initSlickGo = () => {
  $('[data-slick-go]').on('click', function(e){
    e.preventDefault();
    const $this = $(this);
    const $slick = $('#' + $this.data('slick-go'));
    if ($slick){
      $slick.slick('slickGoTo', $this.data('slick-go-index'));
    }
  })
}

// @slick init
export const initSlick = () => {

  // @slick mobile init
  const initSlickMobile = () => {
    const $slickMobile = $('.js-slick--mobile:not(.slick-initialized)');

    $slickMobile.each(function(){
      const $this = $(this);

      slickEvents($this);
      slickPause($this);
      const slickOptions = $.extend({}, defaultOptions, {
        mobileFirst: true,
        appendArrows: $this.next('.slick-nav'),
        appendDots: $this.next('.slick-nav'),
        responsive: [
          {
            breakpoint: breakpoints.medium,
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



  const $slick = $('.js-slick:not(.slick-initialized)');

  $slick.each(function(){
    const $this = $(this);

    slickEvents($this);
    slickPause($this);
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


  const $slickFull = $('.js-slick--full:not(.slick-initialized)');

  $slickFull.each(function(){
    const $this = $(this);
    const slickId = $this.attr('id');
    slickEvents($this);
    slickPause($this);
    const slickOptions = $.extend({}, defaultOptions, {
      //arrows: false,
      prevArrow: $('.slick-prev[data-slick="' + slickId + '"]'),
      nextArrow: $('.slick-next[data-slick="' + slickId + '"]'),
      dots: false,
      
      focusOnSelect: true,
      infinite: true,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000
    });
    $this.slick(slickOptions);

  })

  const $slickCards = $('.js-slick--cards:not(.slick-initialized)');

  $slickCards.each(function(){
    const $this = $(this);

    slickEvents($this);
    //console.log(breakpoints);
    const slickOptions = $.extend({}, defaultOptions, {
      slidesToScroll: 3,
      slidesToShow: 3,
      infinite: true,
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      responsive: [
        {
        breakpoint: breakpoints.large,
        settings: {
          //adaptiveHeight: true,
          slidesToScroll: 2,
          slidesToShow: 2
        }
      },
        {
        breakpoint: breakpoints.medium,
        settings: {
          //adaptiveHeight: true,
          slidesToScroll: 1,
          slidesToShow: 1

        }

      }
      ]
    });

    //console.log(slickOptions);

    $this.slick(slickOptions);

  });

  const $slickCenter = $('.js-slick--center:not(.slick-initialized)');
  $slickCenter.each(function(){
    const $this = $(this);

    slickEvents($this);

    const slickOptions = $.extend({}, defaultOptions, {
      centerMode: true,
      centerPadding: '50px',
      appendArrows: $this.next('.slick-nav'),
      appendDots: $this.next('.slick-nav'),
      adaptiveHeight: false,
      variableWidth: true,
      waitForAnimate: true,
      infinite: true,
      responsive: [
        {

          breakpoint: breakpoints.medium,
          settings: {
            centerMode: false,
            centerPadding: 0,
            variableWidth: false,
            infinite: true,
            slidesToScroll: 1,
            adaptiveHeight: true,
            slidesToShow: 1

          }

        }
      ]
    });

    $this.slick(slickOptions);

  });

  initSlickGo();
}

// const initSlickTabs = () => {


//     const
//     win = $(window),
//     slickOptions = {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       rows: 0,
//       variableWidth: true,
//       infinite: false,
//       swipe: true,
//       accessibility:false,
//       prevArrow: '<button class="slick-prev">Previous</button>',
//       nextArrow: '<button class="slick-next">Next</button>'
//     };
//     $('.tabs').each(function(){
//       const tabs = $(this);
//       var timer;
//       var lastSlideIndex;
//       tabs.on('init', function(event, slick){
//         //removeSlickAria(slick);
//         lastSlideIndex = returnLastSlideIndex(tabs);
//       })
//       const tabsInst = tabs.slick(slickOptions);
//       calcSlidesWidth(tabsInst, lastSlideIndex);

//       tabs.on('afterChange', function(event, slick) {
//         toggleNextArrow(slick, slick.currentSlide >= lastSlideIndex);
//         const currentSlide = slick.$slides[slick.currentSlide];
//         currentSlide.find('button').click();
//         // if (slick.currentSlide > lastSlideIndex + 1) {
//         //   setTimeout(function() {
//         //     slick.goTo(lastSlideIndex + 1);
//         //   });
//         // }
//       });

//       win.on('resize orientationchange', function() {
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//           lastSlideIndex = returnLastSlideIndex(tabs);
//           calcSlidesWidth(tabsInst, lastSlideIndex);
//         }, 100);
//       });
//     }).on('change.zf.tabs', function(e, elem){
//       const tabs = $(this);
//       //const tabsInst = tabs.slick('getSlick');
//       tabs.slick('slickGoTo', $(elem).index());
//       console.log($(elem).index());
//       // console.log(tabsInst);
//       // console.log(elem);
//       // console.log(elem.index());
//       //console.log(elem2);
//       //calcSlidesWidth(tabsInst, returnLastSlideIndex(tabs));
//     })



//     function calcSlidesWidth(s, lastSlideIndex) {
//       var tw = 0;
//       const slickInst = s[0].slick;
//       slickInst.$slides.each(function(i, slide) {
//         tw += $(slide).outerWidth(true);

//       });

//       if (slickInst.currentSlide >= lastSlideIndex) return;

//       toggleNextArrow(slickInst, tw < slickInst.$list.outerWidth(true));
//     }

//     function returnLastSlideIndex(tabs) {


//       var totalWidth = 0, index, flag = true;
//       // console.log(tabs.find($('.slick-slide')))
//       tabs.find('.slick-slide').each(function(i, it) {


//         if (!flag) return;
//         totalWidth += $(it).outerWidth(true);

//         if (totalWidth > tabs.outerWidth(true) && flag) {
//           index = $(it).next().index();
//           flag = false;
//         }
//       });

//       return index;
//     }
//     function toggleNextArrow(slick, state) {

//       state ? slick.$nextArrow.hide() : slick.$nextArrow.show();
//     }

//   // //


// }

// $(document).ready(function(){
//   initSlick(); // @slick init call
//   initSlickGo();
// });
