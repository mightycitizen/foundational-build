import Twig from 'twig';
// import { useEffect } from '@storybook/client-api';
import twigDrupal from 'twig-drupal-filters';
import twigAttributes from 'add-attributes-twig-extension';
import '../src/assets/js/app.js';
// import twigMap from './lib/map';

import $ from 'jquery';
function twigMap(twigInstance) {
  // JS ksort via https://stackoverflow.com/a/31102605
  twigInstance.extendFilter('map', (array, callback) => {
    return array.map(callback);
  });
}

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
export const tags = ['autodocs'];
