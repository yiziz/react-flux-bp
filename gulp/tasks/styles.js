var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var cssUrlAdjuster = require('gulp-css-url-adjuster');
var rename = require('gulp-rename');
var config = require('../config.js').sass;

gulp.task('styles', function() {
  gulp.src(config.src)
    .pipe(sass(config.settings))
    .pipe(cssUrlAdjuster({
      replace: [/^(\.\.\/)+/, '']
    }))
    .pipe(rename(function(path){
      path.basename = config.outputName;
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
