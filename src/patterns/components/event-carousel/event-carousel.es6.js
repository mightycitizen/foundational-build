/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

!((document, Drupal, $) => {
  'use strict';

  /**
   * Setup and attach the Carousel behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.eventCarousel = {
    attach: function (context) {
      // We want to only have the slick carousel trigger once or we will
      // have a lot of pagers being appended on ajax trigger.
      $('.event-carousel', context).once('eventCarousel').each(function () {
        const $list = $('.event-carousel__list', $(this));
        let $nav = $(this).closest('.event-carousel').find('.slick-pager');
        $list.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          fade: false,
          appendArrows: $nav,
          infinite: false,
        });
      });
    }
  };
})(document, Drupal, jQuery);
