!function (document, Drupal, $) {
  'use strict';

  Drupal.behaviors.mobileMenu = {
    attach: function attach(context) {
      $('.main-menu__navicon', context).click(function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
      });
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=main-menu.js.map
