var agentController = require('./socket-db/agent/agent.controller'),
    logger = require('./logger'),
    async = require('async');

exports.resolve = function(data) {
  async.waterfall([
    async.apply(isConnected, data),
    connectAgent,
    updateAgent
  ]);
};

function isConnected(data, callback) {
  agentController
    .fetchAgent(data)
    .then(function(response) {
      if (response) {
        logger.agent(data.username + ' from group: ' + data.group + ' reconnected');

        callback(true);
      }

      callback(null, data);
    });
}

function connectAgent(data, callback) {
  console.log('CONECT');
  if (data.clientHash) {
    console.log('HASH');
    callback(null, data);
  }

  agentController
    .connectAgent(data)
    .then(function(response) {
      logger[data.type](data.username + ' from group: ' + data.group + ' connected');

      callback(true);
    });
}

function updateAgent(data, callback) {
  console.log('UPDATE');
  agentController
    .updateAgent(data)
    .then(function(response) {
      console.log(response);
      logger[data.type](data.username + ' from group: ' + data.group + ' started session');
    });
}
