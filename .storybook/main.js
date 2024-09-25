import { resolve } from 'path';
import remarkGfm from 'remark-gfm';

// Legacy namespace resolver plugin
class LegacyNsResolverPlugin {
  apply(resolver) {
    const target = resolver.ensureHook('resolve');
    resolver
      .getHook('resolve')
      .tapAsync('LegacyNsResolverPlugin', (request, resolveContext, callback) => {
        const requestPath = request.request;
        const LEGACY_REGEXP = /^(\w+)::/;
        if (!requestPath.match(LEGACY_REGEXP)) {
          callback();
          return;
        }

        const newRequest = {
          ...request,
          request: requestPath.replace(LEGACY_REGEXP, '@$1/'),
        };

        resolver.doResolve(target, newRequest, null, resolveContext, callback);
      });
  }
}

export default {
  staticDirs: ['../dist'],

  stories: [
    "../src/stories/**/**/*.stories.js"
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials"
  ],

  framework: {
    name: '@storybook/html-vite',
    options: {}
  },

  async viteFinal(config) {
    // Add legacy resolver plugin
    config.resolve.plugins = [new LegacyNsResolverPlugin()];
    config.resolve.alias = {
      '@components': resolve(__dirname, '../', 'src/stories/components'),
      '@global': resolve(__dirname, '../', 'src/stories/global'),
      '@layout': resolve(__dirname, '../', 'src/stories/layout'),
      '@pages': resolve(__dirname, '../', 'src/stories/pages'),
      '@wrappers': resolve(__dirname, '../', 'src/stories/wrappers'),
    };

    // Add support for Twig files
    config.plugins.push({
      name: 'vite-plugin-twig',
      transform(code, id) {
        if (id.endsWith('.twig')) {
          // Here you can compile the Twig template if necessary
          // This is a simple pass-through for now
          return {
            code: `export default ${JSON.stringify(code)}`,
            map: null, // Provide a source map if needed
          };
        }
      }
    });

    return config;
  },

  docs: {
    autodocs: true
  }
};
