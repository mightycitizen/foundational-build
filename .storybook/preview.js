import Twig from 'twig';
import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import '../dist/css/app.css';
import '../dist/js/app.js';
function setupTwig(twig) {
  twig.cache();
  // twigDrupal(twig);
  // twigAttributes(twig);
  // keysort(twig);
  // uniqueId(twig);
  // fieldValue(twig);
  return twig;
}

setupTwig(Twig);

addDecorator(storyFn => {
  document.addEventListener('DOMContentLoaded', () => {

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
}
