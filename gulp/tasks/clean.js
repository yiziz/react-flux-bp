var gulp = require('gulp');
var del = require('del');
var config = require('../config');

gulp.task('clean:build', function(callback) {
  del(config.browserify.dest, callback);
});

gulp.task('clean:prod', function(callback){
  del(config.prod.dest, callback);
});
