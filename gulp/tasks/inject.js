var gulp = require('gulp');
var inject = require('gulp-inject');
var using = require('gulp-using');
var config = require('../config');
var html_config = config.html;

gulp.task('inject', ['build'], function() {
  var sources = gulp.src(['assets/' + config.sass.outputName,
    config.browserify.outputName],
    {read: false, cwd: browserify.dest});
  return gulp.src(html_config.src)
    .pipe(using())
    .pipe(inject(sources, {addRootSlash:false}))
    .pipe(using())
    .pipe(gulp.dest(html_config.dest));
});
