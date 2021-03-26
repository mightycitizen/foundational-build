
import $ from 'jquery';
import './lib/foundation-explicit-pieces'; // @foundation pick and choose Foundation plugins
import 'slick-carousel'; // @slick carousel/slider
import 'lity'; // @lity modal
import tippy from 'tippy.js'; // @tippy tooltip
import LazyLoad from 'vanilla-lazyload'; // @lazy lazy image and iframe loading
import Litepicker from 'litepicker'; // @litepicker date picker
import selectize from 'selectize'; // @selectize custom select dropdowns

import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../_patterns/global/base/breakpoints.json'; // Foundation breakpoints


// @foundation init
$(document).foundation();

// @foundation breakpoint event trigger
// $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
//   // newSize is the name of the now-current breakpoint, oldSize is the previous breakpoint
// });

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = $(this).offset().top + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  let offsetFactor = 1;
  const dataOffset = $(this).data('offset');
  if (dataOffset) offsetFactor = eval(dataOffset);
  return viewportTop + offsetFactor*$(window).outerHeight() > elementTop && viewportTop < elementBottom;
};

const randomId = () => {
  return Math.random().toString(36).substr(2, 9);
}

// @selectize init
const initSelectize = () => {
  $('.js-selectize').selectize();
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


// @video init
const initVideo = () => {
  const
    initializedClass = 'is-initialized',
    playingClass = 'is-playing';

  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.

  window.onYouTubeIframeAPIReady = function(){

    $('.video-wrapper').each(function(){


        var holder = $(this),
            vid = holder.find('.youtube-player'),
            player,
            playing = false,
            trigger = holder.data('video-trigger'),
            firstPlay = true;

        vid.attr('tabindex', -1);
        const youtubeId = vid.data('youtube-id');
        player = new YT.Player(vid[0], {

            // height: '450',
            // width: '660',


            playerVars: { 'enablejsapi': 1, 'fs': 1, 'playlist': youtubeId, 'loop': 1, 'modestbranding': 1, 'autoplay': 1, 'controls': 0 , 'showInfo': 0, 'mute': 1,'rel': 0},
            videoId: youtubeId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        function onPlayerReady() {
          player.playVideo();

          holder.bind('play', function(){
            if (!playing) {
                player.playVideo();
            }
          })

          holder.bind('pause', function(){
            if (playing) {
              player.pauseVideo();
            }
          })

        }

        function onPlayerStateChange(event) {
          if (firstPlay){
            if (trigger !== 'background'){
              setTimeout(() => {
                player.pauseVideo();
              }, 50);
            }
            holder.addClass(initializedClass);
          }

          if ( event.data == 1 ) {
            playing = true;
            holder.addClass(playingClass);
          }else{
            playing = false;
            holder.removeClass(playingClass)
          }

          firstPlay = false;

        }

        // function setVideoSize(){
        //     var w = holder.width()+200,
        //         h = holder.height()+200;

        //     if (w/h > 16/9){
        //         player.setSize(w, w/16*9);
        //         vid.css({'left': '0px'});
        //     } else {
        //         player.setSize(h/9*16, h);
        //         vid.css({'left': ( -(h/9*16) / 2 ) + holder.width() / 2 });
        //         vid.css({'top': -(h - holder.height()) / 2 });
        //     }
        // }

        player.clickHandler = (e) => {
            e.preventDefault();
            if (!playing) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        }


    });
  }


  $('[data-video-trigger="click"]').on('click', function(){
    if ($(this).hasClass(playingClass)){
      $(this).trigger('pause').removeClass(playingClass);
    }else{
      $(this).trigger('play');
    }
  });

  $(window).on('scroll', Foundation.util.throttle(
    function(){
      $('[data-video-trigger="scroll"]').each(function(){
        if ($(this).find('.youtube-player').isInViewport()){
          $(this).trigger('play');
        }else{
          $(this).trigger('pause');
        }

      });
    }, 50));
}


// #table-scroll init
const initTableScroll = () => {
  $('table').each(function(){
    $(this).wrap('<div class="table-scroll-wrapper"></div>');
    $(this).wrap('<div class="table-scroll"></div>');
  })
  $('.table-scroll').scroll(function() {
    const $wrapper = $(this).parent();
    if($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
      $wrapper.addClass('is-end')
    }else{
      $wrapper.removeClass('is-end')
    }
  });

}


// @litepicker init
const initDatepicker = () => {
  $('.js-date').each(function(){
    new Litepicker({
      element: $(this)[0]
    });
  })
}


// @foundation accessibility init
const initFoundationAccessibility = () => {
  // accordion accessibility
  $(document).on('click', '.accordion-trigger', function(event){
    $(this).parents('.accordion-item').find('.accordion-title').click();
  })
}

// @lity accessibility init
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

// @slick pagination helper function
const slickPagination = (slick) => {
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


// @lazy init
const initLazy = () => {
  new LazyLoad({
    elements_selector: ".js-lazy"
    // ... more custom settings?
  });
}


// @slick init
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

  initTippy(); // @tippy init call
  initLazy(); // @lazy init call
  initSlick(); // @slick init call
  initLityAccessibility(); // @lity init accessibility call
  initFoundationAccessibility();  // @foundation init accessibility call
  initDatepicker(); // @litepicker init call
  initSelectize(); // @selectize init call
  initTableScroll(); // #table-scroll init call
  initVideo(); // @video init call
  initSmoothScroll(); // @smooth-scroll init
})

