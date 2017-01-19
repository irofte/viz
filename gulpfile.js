var gulp = require('gulp');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({ lazy: true });
var del = require('del');
var args = require('yargs').argv;
var wiredep = require('wiredep').stream;

gulp.task('help', function() {
  for (task in gulp.tasks) {
    log('gulp ' + $.util.colors.red(task));
  }
});

gulp.task('styles', ['clean-styles'], function() {
  log('Compiling less to css');

  return gulp
    .src(config.less)
    .pipe($.plumber())
    .pipe($.if(args.verbose, $.print()))
    .pipe($.less())
    .pipe($.autoprefixer({ browsers: ['last 20 version', '> 5%'] }))
    .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(done) {
  var files = config.temp + '**/*.css';

  clean(files, done);
});

function clean(path, done) {
  log('Cleaning:' + $.util.colors.blue(path));

  del(path).then(done());
}

gulp.task('styles-watch', function() {
  gulp.watch([config.less], ['styles']);
});

function log(message) {
  if (typeof(message) === 'object') {
    for (var item in message) {
      if (message.hasOwnProperty(item)) {
        $.util
          .log($.util.colors.blue(message[item]));
      }
    }
  } else {
    $.util
      .log($.util.colors.red(message));
  }
}

gulp.task('wiredep', ['styles'], function() {
  log('Wire up the bower css js and out app js intro the index.jade');

  var options = config.getWiredepDefaultOptions();

  return gulp
    .src(config.index)
    .pipe(wiredep(options))
    .pipe($.inject(gulp.src(config.inject).pipe($.if(args.verbose, $.print())), { addRootSlash: false }))
    .pipe(gulp.dest(config.views));
});

gulp.task('serve-dev', ['wiredep'], function() {

  var nodeOptions = {
    script: config.server,
    delayTime: 1,
    watch: [config.server]
  };

  return $.nodemon(nodeOptions);
});
