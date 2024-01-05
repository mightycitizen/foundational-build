/*eslint strict: ["error", "global"]*/
'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const rename = require('gulp-rename');

// Export our tasks.
module.exports = {
  // Move any fonts to where Pattern Lab is lookinging for them.
  moveFonts: function() {
    return src(
      [
        './src/vendor/**/fonts/*.woff',
        './src/vendor/**/fonts/*.woff2',
        './src/vendor/**/fonts/*.eot',
        './src/vendor/**/fonts/*.ttf',
        './src/vendor/**/fonts/*.svg'
      ],
      { base: './' }
    )
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/fonts'));
  },
  // Move CSS specific to styling Pattern Lab.,
  movePatternCSS: function() {
    return src(['./src/styleguide/**/*.css'], { base: './' })
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/css'));
  },
    // Move JS specific to styling Pattern Lab.
    movePatternJS: function() {
      return src(['./src/styleguide/**/*.js'], { base: './' })
        .pipe(
          rename(function(path) {
            path.dirname = '';
            return path;
          })
        )
        .pipe(dest('./dist/js'));
    }
};
