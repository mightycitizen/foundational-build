import Twig from 'twig';
import { useEffect } from '@storybook/client-api';
import twigDrupal from 'twig-drupal-filters';
import twigAttributes from 'add-attributes-twig-extension';
import twigMap from '../lib/map';

import '../dist/css/all.css';
import '../dist/js/app.js';
import '../dist/css/storybook.css';

function setupTwig(twig) {
  twigMap(twig);
  twigDrupal(twig);
  twigAttributes(twig);
  //twig.cache();
  // set allowInclude option to true
  document.addEventListener('DOMContentLoaded', () => {

    $(document).trigger('_page_ready');
    // $(document).foundation();
  });

//  return storyFn();

  return twig;
}

setupTwig(Twig);




export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
       method: 'alphabetical',
        order: [
          'Global',
          'Layout',
          'Components',
          'Pages',
          '*'
        ],
        includeName: true,
      }
  }

}
