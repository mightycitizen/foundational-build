!function (document, Drupal, $) {
  'use strict';

  Drupal.behaviors.mobileMenu = {
    attach: function attach(context) {
      $('.main-menu__navicon', context).click(function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
      }); // Submenu toggle buttons

      $('.menu-item-toggle', context).on('click', function () {
        var $self = $(this);
        var $parent = $self.parent();
        var $target = $self.siblings('.menu__submenu');

        if ($parent.hasClass('js-opened')) {
          $parent.removeClass('js-opened');
          $target.attr('aria-hidden', 'true');
        } else {
          $parent.addClass('js-opened');
          $target.attr('aria-hidden', 'false');
        }
      });
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=main-menu.js.map
