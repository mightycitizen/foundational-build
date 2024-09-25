const { resolve } = require('path');
import remarkGfm from 'remark-gfm';

/**
 * Transforms legacy namespace::template/path to @namespace/template/path
 */
class LegacyNsResolverPlugin {
  apply(resolver) {
    const target = resolver.ensureHook('resolve');
    resolver
      .getHook('resolve')
      .tapAsync('LegacyNsResolverPlugin', (request, resolveContext, callback) => {
        const requestPath = request.request;
        if (!requestPath.match(/^(\w+)::/)) {
          callback();
          return;
        }

        const newRequest = {
          ...request,
          request: requestPath.replace(/^(\w+)::/, '@$1/'),
        };

        resolver.doResolve(target, newRequest, null, resolveContext, callback);
      });
  }
}

export default {
  staticDirs: ['../dist'],

  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/**/*.stories.jsx"
  ],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-a11y",
    "@storybook/addon-essentials"
  ],

  async viteFinal(config) {
    config.resolve.plugins = [new LegacyNsResolverPlugin()];
    config.resolve.alias = {
      '@components': resolve(__dirname, '../', 'src/stories/components'),
      '@global': resolve(__dirname, '../', 'src/stories/global'),
      '@layout': resolve(__dirname, '../', 'src/stories/layout'),
      '@pages': resolve(__dirname, '../', 'src/stories/pages'),
      '@wrappers': resolve(__dirname, '../', 'src/stories/wrappers'),
    };
    
    // Use Vite's built-in support for YAML and Twig
    config.plugins.push({
      name: 'vite-plugin-yaml',
      transform(code, id) {
        if (id.endsWith('.yaml') || id.endsWith('.yml')) {
          return {
            code: `export default ${JSON.stringify(require('js-yaml').load(code))}`,
            map: null, // provide source map if available
          };
        }
      }
    });

    config.plugins.push({
      name: 'vite-plugin-twig',
      transform(code, id) {
        if (id.endsWith('.twig')) {
          return {
            code: `export default ${JSON.stringify(require('twig').render(code))}`,
            map: null, // provide source map if available
          };
        }
      }
    });

    // Add dependencies to pre-optimization
    config.optimizeDeps = {
      include: ['storybook-dark-mode'],
    };

    return config;
  },

  core: {
    builder: '@storybook/builder-vite', // Using Vite as the builder
  },

  framework: {

    name: '@storybook/html-vite', // Updated to reflect Vite usage
    options: {}
  },

  docs: {
    autodocs: true
  }
};
