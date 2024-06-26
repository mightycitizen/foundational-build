/*eslint strict: ["error", "global"]*/
'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
//sass.compiler = require('sass');

const ModuleReplacement = require('./webpack.module-replacement.config');

import webpackStream from 'webpack-stream';
import webpack2      from 'webpack';
import yargs         from 'yargs';
import pluginSettings from '../src/stories/global/base/plugins.json';
//const PRODUCTION = true;
const PRODUCTION = !!(yargs.argv.production);

let webpackConfig = {
  mode: (PRODUCTION ? 'production' : 'development'),
  plugins: [
    ...ModuleReplacement(pluginSettings)
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ "@babel/preset-env" ],
            compact: false
          }
        }
      },
      {
        test: /\.twig$/i,
        use: 'raw-loader',
      }
    ]
  },
  // devtool: !PRODUCTION && 'source-map'
}
/**
 * Error handler function so we can see when errors happen.
 * @param {object} err error that was thrown
 * @returns {undefined}
 */
function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

// Export our tasks.
module.exports = {
  // Compile Sass.

  compileSass: function() {
    return src(['./src/assets/scss/**/*.scss'])
      .pipe(sass({
        outputStyle: PRODUCTION ? 'compressed' : 'expanded',
        includePaths: ['./node_modules/foundation-sites/scss', './node_modules/motion-ui/src']
        }).on('error', handleError))
      .pipe(
        prefix({
          cascade: false
        })
      )
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/css'));
  },

  // Compile JavaScript.
  compileJS: function() {
    return src(['./src/assets/js/*.js'], {
      base: './'
    })

      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(webpackStream(webpackConfig, webpack2))
      .pipe(
        rename(function(path) {
          path.basename = 'app'
          return path
        })
      )
      //.pipe(sourcemaps.write('./'))
      .pipe(dest('./dist/js'));
  }
};
