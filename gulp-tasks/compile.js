/*eslint strict: ["error", "global"]*/
'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

import webpackStream from 'webpack-stream';
import webpack2      from 'webpack';

const PRODUCTION = false

let webpackConfig = {
  mode: (PRODUCTION ? 'production' : 'development'),
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
    return src(['./src/patterns/**/**/*.scss', './src/vendor/**/*.css','./src/assets/scss/**/*.scss'])
      .pipe(sass({ outputStyle: 'nested' }).on('error', handleError))
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
    return src(['./src/patterns/**/**/*.js', './src/vendor/**/*.js','./src/assets/js/**/*.js'], {
      base: './'
    })
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(webpackStream(webpackConfig, webpack2))
      .pipe(
        rename(function(path) {
          // Currently not using ES6 modules so for now
          // es6 files are compiled into individual JS files.
          // Eventually this can use ES6 Modules and compile
          // all files within a component directory into a single
          // foo.bundle.js file. In that case the bundle name should
          // reflect the components directory name.
          path.dirname = '';
          return path;
        })
      )
      .pipe(sourcemaps.write('./'))
      .pipe(dest('./dist/js'));
  }
};
