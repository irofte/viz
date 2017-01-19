var path = require('path');
var rootPath = path.normalize(__dirname + '/../../public/');

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 3030,
    // bower_components: __dirname + '/../../bower_components',
    css: __dirname + '/.tmp'
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
