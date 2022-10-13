import $ from 'jquery';
import '../utils/in-viewport.js';


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

    $('.video_wrapper[data-video-type="youtube"]').each(function(){
          var holder = $(this),
              vid = holder.find('.video_player'),
              player,
              playing = false,
              trigger = holder.data('video-trigger'),
              firstPlay = true;

          vid.attr('tabindex', -1);
          const youtubeId = vid.data('video-id');
          player = new YT.Player(vid[0], {
              playerVars: { 'enablejsapi': 1, 'fs': 1, 'playlist': youtubeId, 'loop': 1, 'modestbranding': 1, 'autoplay': 1, 'controls': 1 , 'showInfo': 0, 'mute': 1,'rel': 0},
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
            //console.log('now', event.target.getPlayerState());
            switch (event.target.getPlayerState()){
              case 2:
                setTimeout(() => {
                  switch (event.target.getPlayerState()){
                    case 2:
                      playing = false;
                      holder.removeClass(playingClass);
                      break;
                    case 1:
                      playing = true;
                      if (!firstPlay) holder.addClass(playingClass);
                      break;
                  }
                }, 500);
                break;
              case 1:
                if (!firstPlay) player.unMute();
                playing = true;
                if (!firstPlay) holder.addClass(playingClass);
                break;
            }
            //console.log(event.target.getPlayerState());
            // holder.addClass('is-changing');
            // setTimeout(() => {
            //   switch (event.target.getPlayerState()){
            //     case 2:
            //       playing = false;
            //       holder.removeClass(playingClass)
            //       break;
            //     case 1:
            //       playing = true;
            //       holder.addClass(playingClass);
            //       break;
            //   }
            //   holder.removeClass('is-changing');
            // }, 500);

            firstPlay = false;

          }
          function setVideoSize(){
            var w = holder.width(),
                h = holder.height();

            if (w/h > 1){
                player.setSize(w, w/16*9); // 200 + w
                vid.css({'left': '0px'});
            } else {
                player.setSize(h/9*16, h); // 200 + h
                vid.css({'left': ( -(h/9*16) / 2 ) + holder.width() / 2 });
                vid.css({'top': -(h - holder.height()) / 2 });
            }
          }

          // player.clickHandler = (e) => {
          //     e.preventDefault();
          //     if (!playing) {
          //         player.playVideo();
          //     } else {
          //         player.pauseVideo();
          //     }
          // }
        $(window).on('resize', Foundation.util.throttle(
          function(){
            setVideoSize();
          }, 50));


    });
  }

  $(document).on('click', '[data-video-trigger="click"][data-video-type="youtube"]', function(){
    if ($(this).hasClass(playingClass)){
      $(this).trigger('pause').removeClass(playingClass);
    }else{
      $(this).trigger('play');
    }
  });

  $(window).on('scroll', Foundation.util.throttle(
    function(){
      $('[data-video-trigger="scroll"][data-video-type="youtube"]').each(function(){
        if ($(this).find('.video_player').isInViewport()){
          $(this).trigger('play');
        }else{
          $(this).trigger('pause');
        }

      });
    }, 50));
}

$(window).on('scroll', Foundation.util.throttle(
  function(){
    checkVideo();
  }, 50));

const checkVideo = () => {
  if ($('body').hasClass('youtube-loaded')) return false;
  const $video = $('[data-video-trigger][data-video-type="youtube"]');
  if ($video.isInViewport()){
    initVideo();
    $('body').addClass('youtube-loaded');
  }

}

$(window).on('load', function(){
  checkVideo();

});
