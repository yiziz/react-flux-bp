var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var using = require('gulp-using');
var config = require('../config');
var html_config = config.html;

gulp.task('build', ['browserify', 'styles', 'html', 'assets'], function() {
  var sources = gulp.src(['assets/' + config.sass.outputName + '.css',
    config.browserify.outputName + '.js'],
    {read: false, cwd: './dist'});
  return gulp.src(html_config.src)
    .pipe(using())
    .pipe(inject(sources, {addRootSlash:false}))
    .pipe(using())
    .pipe(gulp.dest(html_config.dest))
    .pipe(connect.reload());
});
