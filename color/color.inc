<?php

/**
 * @file
 * Lists available colors and color schemes for the collective theme.
 */

$info = [
  // Available colors and color labels used in theme.
  'fields' => [
    'primary-dark' => t('Primary dark background'),
    'secondary-dark' => t('Secondary dark background'),
    'text' => t('Text color'),
    'link' => t('Link and primary dark background color'),
    'base' => t('Secondary dark color'),
  ],
  // Pre-defined color schemes.
  'schemes' => [
    'default' => [
      'title' => t('Fashionably Classic (default)'),
      'colors' => [
        'text' => '#000000',
        'base' => '#404040',
        'link' => '#003954',
      ],
    ],
    'eclectic_melange' => [
      'title' => t('Eclectic Melange'),
      'colors' => [
        'link' => '#484854',
        'base' => '#854f37',
        'text' => '#000000',
      ],
    ],
    'understated_sophisicate' => [
      'title' => t('Understated Sophisicate'),
      'colors' => [
        'link' => '#191919',
        'base' => '#699874',
        'text' => '#000000',
      ],
    ],
  ],

  // CSS files (excluding @import) to rewrite with new color scheme.
  'css' => [
    'dist/css/breadcrumb.css',
    'dist/css/button.css',
    'dist/css/global.css',
    'dist/css/header.css',
    'dist/css/main-menu.css',
    'dist/css/search-box.css',
    'dist/css/site-footer.css',
    'dist/css/user-account-nav.css',
  ],

  // Files to copy.
  'copy' => [
    'logo.svg',
  ],
];
