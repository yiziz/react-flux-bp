var gulp = require('gulp');
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var using = require('gulp-using');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var runSequence = require('run-sequence')
var config = require('../config');
var prod_config = config.prod;

gulp.task('prod:assets', function(){
  return merge([
    gulp.src(config.browserify.dest + '/assets/**/*.css')
      .pipe(minify())
      .pipe(rev())
      .pipe(gulp.dest(prod_config.dest + '/assets')),
    gulp.src(config.browserify.dest + '/assets/**/!(*.css)')
      .pipe(gulp.dest(prod_config.dest + '/assets'))
  ]);
});

gulp.task('prod:js', function(){
  var outputName = config.browserify.outputName;
  return gulp.src(config.browserify.dest + '/' + outputName + '.js')
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(prod_config.dest));
});

gulp.task('prod:inject', function(){
  var outputName = config.browserify.outputName,
    sources = gulp.src(['assets/*.css', outputName + '*.js'],
      {read: false, cwd: prod_config.dest});
  return gulp.src(config.html.src)
    .pipe(using())
    .pipe(inject(sources, {addRootSlash:false}))
    .pipe(using())
    .pipe(gulp.dest(prod_config.dest));
});

gulp.task('prod', function(callback) {
  return runSequence(
    'clean:build',
    'build',
    'clean:prod',
    'prod:assets',
    'prod:js',
    'prod:inject',
  callback);
});
