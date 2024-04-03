const { resolve } = require('path');
const path = require('path');
const LEGACY_REGEXP = /^(\w+)::/;
import remarkGfm from 'remark-gfm';

/**
 * Transforms legacy namespace::template/path to @namespoace/template/path
 */
class LegacyNsResolverPlugin {
  apply(resolver) {
    const target = resolver.ensureHook('resolve');
    resolver
      .getHook('resolve')
      .tapAsync('LegacyNsResolverPlugin', (request, resolveContext, callback) => {
        const requestPath = request.request;
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


module.exports = {
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

  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new LegacyNsResolverPlugin()];
    config.resolve.alias = {
      '@components': path.resolve(__dirname, '../', 'src/stories/components'),
      '@global': path.resolve(__dirname, '../', 'src/stories/global'),
      '@layout': path.resolve(__dirname, '../', 'src/stories/layout'),
      '@pages': path.resolve(__dirname, '../', 'src/stories/pages'),
      '@wrappers': path.resolve(__dirname, '../', 'src/stories/wrappers'),
    };
    config.module.rules.push({
      test: /\.ya?ml$/,      
      loader: 'js-yaml-loader'
    });
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twigjs-loader',
          options: {
            twigOptions: {
              allowInlineIncludes: true,
              paths: {
                components: "src/stories/components"
              },
            }
          }
        },
      ],
    });

    return config;
  },

  docs: {
    autodocs: true
  }
}
