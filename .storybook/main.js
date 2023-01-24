const { resolve } = require('path');
const path = require('path');
module.exports = {
  staticDirs: ['../dist'],
  "stories": [
    "../src/stories/**/**/*.stories.jsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/html",
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: [
        {
          loader: 'twig-loader',
          options: {
            twigOptions: {
              namespaces: {
                global: resolve(__dirname, '../', 'src/stories/global'),
                components: resolve(__dirname, '../','src/stories/components'),
                layout: resolve(__dirname, '../','src/stories/layout')
              },
            }
          }
        },
      ],
    });

    return config;
  }
}
