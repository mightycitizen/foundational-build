/**
 * @file
 * Behaviors for the Filter Accordion.
 */
/* eslint-disable max-len */

!((document, Drupal, $) => {
  'use strict';

  /**
   * Setup and attach the Filter Accordion behaviors.
   *
   * @type {Drupal~behavior}
   */
  Drupal.behaviors.filterAccordion = {
    attach: function(context) {

      const self = this;
      const $faqAccordions = $('.faq-accordion', context);

      $faqAccordions.each(function() {
        const $faqAccordion = $(this);

        // Attach click handler for accordion.
        const $toggle = $faqAccordion.find('.faq-accordion__toggle', context);
        $toggle.on('click', function() {
          self.toggleClickEvent($faqAccordion, $(this));
        });
      });
    },
    toggleClickEvent: function($faqAccordion, $toggle) {

      // Identify the matching element.
      const $content = $faqAccordion.find('#' + $toggle.attr('aria-controls'));

      if (!$faqAccordion.hasClass('open')) {
        // Accordion does not have `.open`, so we are opening the accordion.
        $faqAccordion.addClass('open');
        // Toggle the `aria-expanded`.
        $toggle.attr('aria-expanded', 'true');
        // Toggle the `aria-hidden` attribute on the content.
        $content.attr('aria-hidden', 'false');
      }
      else {
        // Same as the if, but in reverse.
        $faqAccordion.removeClass('open');
        $toggle.attr('aria-expanded', 'false');
        $content.attr('aria-hidden', 'true');
      }
    },
  };
})(document, Drupal, jQuery);
