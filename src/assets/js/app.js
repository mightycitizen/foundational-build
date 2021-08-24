import "babel-polyfill"; // ie 11 polyfill - can exclude if not in scope
import $ from 'jquery';
import './lib/foundation-explicit-pieces'; // @foundation pick and choose Foundation plugins

import LazyLoad from 'vanilla-lazyload'; // @lazy lazy image and iframe loading
import Litepicker from 'litepicker'; // @litepicker date picker
import loaderTemplate from '../../_patterns/components/utils/loader.twig'; // used with @forms

import './plugins/slider';
import './plugins/tippy';
import './plugins/ajaxify';
import './plugins/selectize';
import './plugins/lity';
import './plugins/slick';

//import { mediumBreakpoint, largeBreakpoint, xxlargeBreakpoint } from '../../_patterns/global/base/breakpoints.json'; // Foundation breakpoints

// @foundation init
$(document).foundation();

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

function buildPagination(
  totalItems,
  currentPage = 1,
  pageSize = 10,
  maxPages = 10
) {
  // calculate total pages
  let totalPages = Math.ceil(totalItems / pageSize);

  // ensure current page isn't out of range
  if (currentPage < 1) {
      currentPage = 1;
  } else if (currentPage > totalPages) {
      currentPage = totalPages;
  }

  let startPage, endPage;
  if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
  } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
          // current page near the start
          startPage = 1;
          endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
          // current page near the end
          startPage = totalPages - maxPages + 1;
          endPage = totalPages;
      } else {
          // current page somewhere in the middle
          startPage = currentPage - maxPagesBeforeCurrentPage;
          endPage = currentPage + maxPagesAfterCurrentPage;
      }
  }

  // calculate start and end item indexes
  let startIndex = (currentPage - 1) * pageSize;
  let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

  // create an array of pages to ng-repeat in the pager control
  let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

  // return object with all pager properties required by the view
  return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
  };
}


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = $(this).offset().top + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  let offsetFactor = 1;
  const dataOffset = $(this).data('offset');
  if (dataOffset) offsetFactor = eval(dataOffset);
  return viewportTop + offsetFactor*$(window).outerHeight() > elementTop && viewportTop < elementBottom;
};


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


// const randomId = () => {
//   return Math.random().toString(36).substr(2, 9);
// }

// @form helpers init
const initFormHelpers = () => {
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
              playerVars: { 'enablejsapi': 1, 'fs': 1, 'playlist': youtubeId, 'loop': 1, 'modestbranding': 1, 'autoplay': 1, 'controls': 0 , 'showInfo': 0, 'mute': 1,'rel': 0},
              videoId: youtubeId,
              events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
              }
          });

          function onPlayerReady() {
            player.playVideo();
            setVideoSize();
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
          function setVideoSize(){
            var w = holder.width(),
                h = holder.height();

            if (w/h > 1){
                player.setSize(w, 200 + w/16*9);
                vid.css({'left': '0px'});
            } else {
                player.setSize(h/9*16, h + 200);
                vid.css({'left': ( -(h/9*16) / 2 ) + holder.width() / 2 });
                vid.css({'top': -(h - holder.height()) / 2 });
            }
          }

          player.clickHandler = (e) => {
              e.preventDefault();
              if (!playing) {
                  player.playVideo();
              } else {
                  player.pauseVideo();
              }
          }
        $(window).on('resize', Foundation.util.throttle(
          function(){
            setVideoSize();
          }, 50));


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
  initDatepicker(); // @litepicker init call

  initTableScroll(); // #table-scroll init call
  initVideo(); // @video init call
  initSmoothScroll(); // @smooth-scroll init
  initMenuHelpers(); // @menu helpers

  initFormHelpers(); // @form helpers init\

  initSkipTo(); // @skip-to init
  initSelectUrl(); // @select-url init
})

