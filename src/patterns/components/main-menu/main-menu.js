!((document, Drupal, $) => {
  'use strict';
  Drupal.behaviors.mainMenu = {
    attach: function (context) {
      $('.main-menu__navicon', context).click(function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
      });

      $('li.menu-item--has-submenu', context).hover(
        function () {
          if ($('.main-menu__navicon', context).is(':hidden')) {
            /* Mouse enter */
            $(this).addClass('js-open');
            $(this).children('a').attr('aria-expanded', 'true');
          }
        },
        function () {
          if ($('.main-menu__navicon', context).is(':hidden')) {
            /* Mouse leave */
            const $self = $(this);
            setTimeout(function () {
              $self.removeClass('js-open');
              $self.children('a').attr('aria-expanded', 'false');
            }, 1000);
          }
        }
      );

      $('.menu-item-toggle', context).click(function () {
        if ($(this).parent().hasClass('js-open')) {
          $(this).parent().removeClass('js-open');
          $(this).siblings('a').attr('aria-expanded', 'false');
        } else {
          $(this).parent().addClass('js-open');
          $(this).siblings('a').attr('aria-expanded', 'true');
        }
      });

      $(window).resize(function () {
        $('li.menu-item--has-submenu').removeClass('js-open');
      });
    }
  };
})(document, Drupal, jQuery);
