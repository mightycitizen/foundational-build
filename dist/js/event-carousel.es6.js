/**
 * @file
 * Behaviors for the Filter Accordion.
 */

/* eslint-disable max-len */
!function (document, Drupal, $) {
  'use strict';
  /**
   * Setup and attach the Carousel behaviors.
   *
   * @type {Drupal~behavior}
   */

  Drupal.behaviors.eventCarousel = {
    attach: function attach(context) {
      $('.event-carousel__slick', context).once('eventCarousel').each(function () {
        var $nav = $(this).parent().find('.slick-pager');
        $(this).slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
          fade: false,
          appendArrows: $nav
        });
      });
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=event-carousel.es6.js.map
