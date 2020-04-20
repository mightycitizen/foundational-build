!((document, Drupal, $) => {
  'use strict';
  Drupal.behaviors.mobileMenu = {
    attach: function (context) {
      $('.main-menu__navicon', context).click(function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
      });

      // Submenu toggle buttons
      $('.menu-item-toggle', context).on('click', function () {
        const $self = $(this);
        const $parent = $self.parent();
        const $target = $self.siblings('.menu__submenu');
        if ($('.main-menu__navicon', context).is(':visible')) {
          if ($parent.hasClass('js-opened')) {
            $parent.removeClass('js-opened');
            $target.attr('aria-hidden', 'true');
          } else {
            $parent.addClass('js-opened');
            $target.attr('aria-hidden', 'false');
          }
        }
      });

      $(window).resize(function () {
        $('li.menu-item--has-submenu').removeClass('js-opened');
      });
    }
  };
})(document, Drupal, jQuery);
