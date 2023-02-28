import Twig from 'twig';
import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import '../dist/css/app.css';
import '../dist/js/app.js';
import '../dist/css/storybook.css';

function setupTwig(twig) {
  //twig.cache();
  // set allowInclude option to true

  return twig;
}

setupTwig(Twig);

addDecorator(storyFn => {
  document.addEventListener('DOMContentLoaded', () => {

    $(document).trigger('_page_ready');
    $(document).foundation();
  });

  return storyFn();
});



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
