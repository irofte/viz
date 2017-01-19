var rootPath = __dirname + '/../../public/';

module.exports = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || 3030,
    css: __dirname + '/.tmp'
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
