var gulp = require('gulp');
var connect = require('gulp-connect');
var changed = require('gulp-changed');
var using = require('gulp-using');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var config = require('../config.js').assets;

gulp.task('assets', function() {
  var sources = [
  gulp.src('src/assets/**/*', { base: 'src/assets/' })
  .pipe(using())
  .pipe(changed(config.dest))
  .pipe(gulp.dest(config.dest)),

  gulp.src(config.vendor_src, { base: '.' })
  .pipe(using())
  .pipe(rename(function(path){
    path.dirname = path.dirname.replace(/.*assets\//, '');
  }))
  .pipe(changed(config.dest))
  .pipe(gulp.dest(config.dest))
  ];

  return merge(sources).pipe(connect.reload());
});
