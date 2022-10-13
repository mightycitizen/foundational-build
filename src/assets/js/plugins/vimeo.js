import $ from 'jquery';
import Player from '@vimeo/player';

import '../utils/in-viewport.js';
//import { iframe } from 'lity';



// @video init
const initVideo = () => {
  const
    initializedClass = 'is-initialized',
    playingClass = 'is-playing';

  $('.video_wrapper[data-video-type="vimeo"]').each(function () {
    var holder = $(this),
      vid = holder.find('.video_player'),
      player,
      playing = false,
      iframe,
      trigger = holder.data('video-trigger'),
      firstPlay = true;

    vid.attr('tabindex', -1);
    const videoId = vid.data('video-id');
    vid.attr('id', 'vimeo_' + videoId);
    player = new Player('vimeo_' + videoId, {
      id: videoId
    });

    player.ready().then(function(){
      iframe = vid.find('iframe');
      holder.addClass(initializedClass);
      if (trigger === 'background') player.play();
      setVideoSize();
    })

    holder.bind('play', function () {
      if (!playing) {
        player.play();
      }
    })

    //console.log(holder);

    holder.bind('pause', function () {
      //alert('test');
      if (playing) {
        player.pause();
      }
    })


    player.on('play', function () {
      playing = true;
      holder.addClass(playingClass);
    });
    player.on('pause', function () {
      playing = false;
      holder.removeClass(playingClass);
    });


    function setVideoSize() {
      var w = holder.width(),
        h = holder.height();
      iframe.css({
        width: w,
        height: h
      })
      if (w / h > 1) {
        //player.resize(w, 200 + w / 16 * 9);

        vid.css({
          left: '0px'
        });
      } else {
        //player.resize(h / 9 * 16, h + 200);
        vid.css({
          left: (-(h / 9 * 16) / 2) + holder.width() / 2,
          top: -(h - holder.height()) / 2
        });

      }
    }

    // holder.on('click', (e) => {
    //   alert('test');
    //   e.preventDefault();
    //   if (!playing) {
    //     player.playVideo();
    //   } else {
    //     player.pauseVideo();
    //   }
    // });

    $(window).on('resize', Foundation.util.throttle(
      function () {
        setVideoSize();
      }, 50));


  });


  $(document).on('click', '[data-video-type="vimeo"][data-video-trigger="click"]', function () {

    //alert('test');
    if ($(this).hasClass(playingClass)) {
      $(this).trigger('pause').removeClass(playingClass);
    } else {
      $(this).trigger('play');
    }
  });

  $(window).on('scroll', Foundation.util.throttle(
    function () {
      $('[data-video-type="vimeo"][data-video-trigger="scroll"]').each(function () {
        if ($(this).find('.video_player').isInViewport()) {
          $(this).trigger('play');
        } else {
          $(this).trigger('pause');
        }

      });
    }, 50));
}

const checkVideo = () => {
  if ($('body').hasClass('vimeo-loaded')) return false;
  const $video = $('[data-video-trigger][data-video-type="vimeo"]');
  if ($video.isInViewport()){
    initVideo();
    $('body').addClass('vimeo-loaded');
  }

}

$(window).on('load', function(){
  checkVideo();

});
