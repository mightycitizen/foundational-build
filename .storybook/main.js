import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths'
import remarkGfm from 'remark-gfm';
import Twig from 'twig';
// import twigLoader from 'vite-plugin-twig-loader';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"



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
    config.plugins.push(
      twig({
        // You can configure options here
        namespaces: {
          components: join(__dirname, '../', 'src/stories/components'),
          global: join(__dirname, '../', 'src/stories/global'),
          layout: join(__dirname, '../', 'src/stories/layout'),
          pages: join(__dirname, '../', 'src/stories/pages'),
          wrappers: join(__dirname, '../', 'src/stories/wrappers'),
        },
      })
    );

    return config;
  },

  docs: {
    autodocs: true
  }
};
