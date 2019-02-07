!function (document, Drupal, $) {
  'use strict';

  /**
  * Setup and attach the Form behaviors.
  *
  * @type {Drupal~behavior}
  */

  /**
   * Adds float label and hide show functionality for form items.
   */

  Drupal.behaviors.formItem = {

    attach: function attach(context) {
      this.floatLabelInit(context);
    },

    floatLabelInit: function floatLabelInit(context) {
      var $formItem = $('.js-form-item', context);

      // Check to see if there's any value in the inputs
      // by default and apply a class if so.
      $formItem.each(function () {
        Drupal.behaviors.formItem.floatLabel($(this));
      });

      // If the user focuses or blurs the input check if the
      // input now has a value. If so add a class.
      $formItem.on('focus, blur', function () {
        Drupal.behaviors.formItem.floatLabel($(this));
      });
    },

    // If the input contains any value, add the class. If not
    // remove it.
    floatLabel: function floatLabel($el) {
      if ($el.val() !== '') {
        $el.parent().addClass('floated');
      } else {
        $el.parent().removeClass('floated');
      }
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=form.js.map
