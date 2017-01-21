'use strict';

var AccountModel = require('./account.model')

exports.logIn = function(req, res) {
  if (!req.body.username) {
    res
      .status(404)
      .send('There is an error on request');
  }

  AccountModel
    .find(req.body)
    .then(accountResolve);

  function accountResolve(response) {
    if (!response.length) {
      res
        .status(404)
        .send('Login unsuccesfull!');
    }

    res.send(response);
  }
};
