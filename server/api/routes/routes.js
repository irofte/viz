var accountController = require('../account/account.controller.js');

module.exports = function(app, config) {
  app.post('/api/login', function(req, res) {
    return accountController.logIn(req, res);
  });

  app.post('/api/user', function(req, res) {
    return accountController.createUser(req, res);
  });
};
