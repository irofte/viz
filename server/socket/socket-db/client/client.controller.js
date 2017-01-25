'use strict';

var Client = require('../identity.model')

exports.fetchClient = function(req) {
  return Client.findOne(req);
};

exports.connectClient = function(req) {
  var client = new Client(req);

  return client.save();
};
