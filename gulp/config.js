var dest = './dist';
var src = './src';
var prod = './www';

module.exports = {
  server: {
    settings: {
      root: dest,
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    }
  },
  sass: {
    src: [src + '/styles/**/*.{sass,scss,css}'],
    dest: dest + '/assets',
    outputName: 'app',
    settings: {
      indentedSyntax: false, // Enable .sass syntax?
      imagePath: '/images' // Used by the image-url helper
    }
  },
  assets: {
    src: [src + '/assets/**/*'],
    vendor_src: ['./vendor/bootstrap-sass/assets/fonts/**/*',
      './vendor/bootstrap-sass/assets/images/**/*'],
    dest: dest + '/assets'
  },
  browserify: {
    settings: {
      transform: ['reactify', 'babelify']
    },
    src: [src + '/js/app.jsx'],
    dest: dest,
    outputName: 'app',
  },
  prod: {
    dest: prod
  },
  html: {
    src: 'src/index.html',
    dest: dest
  },
  watch: {
    src: 'src/**/*.*',
    tasks: ['build']
  }
};
