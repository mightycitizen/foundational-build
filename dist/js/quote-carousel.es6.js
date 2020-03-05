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

  Drupal.behaviors.quoteCarousel = {
    attach: function attach(context) {
      $('.quote-carousel__slick', context).once('quoteCarousel').each(function () {
        $(this).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: false
        });
      });
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=quote-carousel.es6.js.map
