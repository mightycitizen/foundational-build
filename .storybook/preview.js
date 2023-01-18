import Twig from 'twig';
import '../dist/css/app.css';
//import '../dist/js/app.js';
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

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
