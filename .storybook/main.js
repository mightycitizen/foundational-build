import path from 'path';
import { fileURLToPath } from 'url';
import twig from 'vite-plugin-twig-drupal';
import { join } from "node:path"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



console.log(__dirname);


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
  staticDirs: ['../public'],

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
    config.resolve.plugins = [
      new LegacyNsResolverPlugin()
  ];    
    
    config.plugins.push(
      ViteImageOptimizer({
        logStats: true,
        includePublic: true,
        mozjpeg: { quality: 75 },
        pngquant: { quality: [0.6, 0.8] },
        svgo: true,
        webp: { quality: 75 },
        /* pass your config */
      })
    );
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

  docs: {}
};
