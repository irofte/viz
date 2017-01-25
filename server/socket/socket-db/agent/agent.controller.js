'use strict';

var Agent = require('../identity.model')

exports.fetchAgent = function(req) {
  return Agent.findOne(req);
};

exports.connectAgent = function(req) {
  var agent = new Agent(req);

  return agent.save();
};

exports.hasHash = function(req) {
  return Agent.findOne(req);
};

exports.updateAgent = function(req) {
  return Agent.update({ _id: req._id }, req);
};

exports.removeAgent = function(req) {
  return Agent.remove({ _id: req._id });
};
