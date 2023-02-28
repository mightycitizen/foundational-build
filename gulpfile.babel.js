/*eslint strict: ["error", "global"]*/
'use strict';

// Include gulp helpers.
const { series, src, dest, parallel, watch } = require('gulp');


//import browser       from 'browser-sync';
import fs            from 'fs';
import yaml          from 'js-yaml';


// Include Pattern Lab and config.
// const config = require('./patternlab-config.json');
// const patternlab = require('@pattern-lab/core')(config);
let method;

// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
const { compileSass, compileJS } = require('./gulp-tasks/compile.js');
const { lintJS, lintSass } = require('./gulp-tasks/lint.js');
const { compressAssets } = require('./gulp-tasks/compress.js');
const { cleanCSS, cleanJS, cleanWebDist, cleanWebComponents, cleanWebLayout } = require('./gulp-tasks/clean.js');

const { concatCSS } = require('./gulp-tasks/concat.js');
const { moveFonts, movePatternCSS, movePatternJS } = require('./gulp-tasks/move.js');
const server = require('browser-sync').create();
//const webpack = require('webpack-stream');
//const jsonToSass = require('gulp-json-data-to-sass');
const jsonCss = require('gulp-json-css');


// Compile Our Sass and JS
exports.compile = parallel(compileSass, compileJS, moveFonts, movePatternCSS, movePatternJS);

// Lint Sass and JavaScript
exports.lint = parallel(lintSass, lintJS);

// Compress Files
exports.compress = compressAssets;

// Concat all CSS and JS files into a master bundle.
exports.concat = parallel(concatCSS);

// Clean all directories.
exports.clean = parallel(cleanCSS, cleanJS);

/**
 * Start browsersync server.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function serve(done) {
  // See https://browsersync.io/docs/options for more options.
  method = 'patternlab';
  server.init({
    // We want to serve both the patternlab directory, so it gets
    // loaded by default AND three directories up which is the
    // Drupal core directory. This allows urls that reference
    // Drupal core JS files to resolve correctly.
    // i.e. /core/misc/drupal.js
    server: [ '../../../'],
    notify: false,
    open: false
  });
  done();
}

function buildVariables(){


  return src('src/stories/global/base/**/*.json')
    .pipe(jsonCss({
        keepObjects: true
    }))
    .pipe(dest('src/assets/scss/variables/'));

}

/**
 * Watch Sass and JS files.
 * @returns {undefined}
 */
function watchFiles() {
  // Watch all my sass files and compile sass if a file changes.
  watch(['./src/stories/global/base/**/*.json'],
    series(buildVariables, compileSass, concatCSS, (done) => {
      server.reload('*.css');
      done();
    })
  )
  watch(
    ['./src/assets/**/*.scss'],
    series(compileSass, concatCSS, (done) => {
      server.reload('*.css');
      done();
    })
  );

  // Watch all my JS files and compile if a file changes.
  watch(
    ['./src/assets/js/**/*.js'],
    series(compileJS, (done) => {
      server.reload('*.js');
      done();
    })
  );

  // Reload the browser after patternlab updates.
  if (method === 'patternlab'){
    // patternlab.events.on('patternlab-build-end', () => {
    //   server.reload('*.html');
    // });
  }else{
    watch(['./src/stories/components/**/*.twig'], (done) =>  {server.reload('*.html'); done()});
    watch(['./src/stories/layout/**/*.twig'], (done) =>  {server.reload('*.html'); done()});
    watch([
      //'../web/themes/custom/mc_theme/templates/**/*',
      '../templates/**/*',
    ], (done) => {
      server.reload();
      done();
    })
  }
}


// Start a server with BrowserSync to preview the site in
function browserSync(done) {
  let ddevYmlFile = fs.readFileSync(__dirname + '/../.ddev/config.yaml', 'utf8');
  const ddevConfig = yaml.load(ddevYmlFile);
  const siteName = ddevConfig.name;
  let proxyUrl = 'https://'+siteName+'.ddev.site';
  if (ddevConfig.router_https_port !== '443') proxyUrl += ':' + ddevConfig.router_https_port;
  server.init({
    notify: false,
    // server: PATHS.dist, port: PORT,
    proxy: proxyUrl
  });
  done();

}




// Watch task that runs a browsersync server.
exports.watch = series(
  buildVariables,
  parallel(cleanCSS, cleanJS),
  parallel(
    lintSass,
    compileSass,
    lintJS,
    compileJS,
    compressAssets,
    moveFonts,
    movePatternCSS,
    movePatternJS
  ),
  concatCSS,
  // series(serve, watchFiles)
);

// Build task for Pattern Lab.
//exports.styleguide = buildPatternlab;

//exports.copyComponent = copyComponent;

// exports.deploy = parallel(
//   series(cleanWebComponents,cleanWebLayout,copyComponent, copyLayouts),
//   series(cleanWebDist, parallel(copyCSS, copyJS, copyFonts, copyImages))
// );

exports.ddev = series(
  browserSync,
  watchFiles
);;

// Default Task
exports.default = series(
  parallel(cleanCSS, cleanJS),
  parallel(
    compileSass,
    compileJS,
    compressAssets,
    moveFonts,
    movePatternCSS,
    movePatternJS
  ),
  concatCSS
);
