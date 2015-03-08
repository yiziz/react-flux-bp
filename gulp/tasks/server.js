var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config');
var server_settings = config.server.settings;

gulp.task('server', function() {
  connect.server(server_settings);
});

gulp.task('server:prod', function() {
  var prod_settings = {};
  for(var key in server_settings ){
    prod_settings[key] = server_settings[key];
  }
  prod_settings.root = config.prod.dest;
  connect.server(prod_settings);
});
