module.exports = function() {
  var public = './public/';
  var app = public + 'app/';
  var temp = './.tmp/';

  var config = {
    temp: './.tmp',
    // all js to linter check
    alljs: [
      './public/app/**/*.js'
    ],
    test: [
      './test/**/*.js'
    ],
    // less files path
    less: ['./public/styles/app.less'],
    bower: {
      json: require('./bower.json'),
      directory: './bower_components',
      ignorePath: '../../'
    },
    index: public + 'views/index.jade',
    public: public,
    views: public + 'views',
    inject: [
      app + '**/app.js',
      app + '**/*.module.js',
      app + '**/*.service.js',
      app + '**/*.controller.js',
      app + '**/*.directive.js',
      app + '**/*.js',
      temp + 'app.css'
    ],
    server: 'server.js'
  };

  config.getWiredepDefaultOptions = function() {
    var options = {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };

    return options;
  };

  return config;
};
