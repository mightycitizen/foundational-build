const { resolve } = require('path');
const path = require('path');
const LEGACY_REGEXP = /^(\w+)::/;

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
    "../src/stories/**/**/*.stories.jsx"
  ],
  addons: [
    // "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-interactions",
    // "storybook-design-token"
  ],
  framework: "@storybook/html",
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
  }
}
