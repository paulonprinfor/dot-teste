const { series, parallel, src, dest, watch, task } = require('gulp');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');

const cssFiles = [
  './css/reset.css',
  './css/fonts.css',
  './css/styles.css'
]

function cssTask() {
  return src(cssFiles)
    .pipe(concatCss("styles.css"))
    .pipe(cleanCSS())
    .pipe(rename({ basename: 'styles', suffix: '.min' }))
    .pipe(dest('./dist'));
}


function watchTask() {
  watch('./css/*.css', cssTask);
  
}
exports.default = series(parallel(cssTask))
exports.watch = parallel(watchTask)
