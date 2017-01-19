'use strict';

var AccountModel = require('./account.model')

exports.createUser = function(req, res) {
  var user = new AccountModel(req.body);

  user.save(saveResolve);

  function saveResolve(error, response) {
    if (error) {
      res
        .status(404)
        .send(error);
    }

    res
      .send(('User %s created with success', req.body.username));
  }
};
