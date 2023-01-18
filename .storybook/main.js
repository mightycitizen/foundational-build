const { resolve } = require('path');
const path = require('path');
module.exports = {
  staticDirs: ['../dist'],
  "stories": [
    "../src/_patterns/**/**/*.stories.jsx"
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
                global: resolve(__dirname, '../', 'src/_patterns/global'),
                components: resolve(__dirname, '../','src/_patterns/components'),
                layout: resolve(__dirname, '../','src/_patterns/layout')
              },
            }
          }
        },
      ],
    });

    return config;
  }
}
