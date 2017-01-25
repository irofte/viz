var agentController = require('./socket-db/agent/agent.controller'),
    clientController = require('./socket-db/client/client.controller'),
    logger = require('./logger'),
    async = require('async');

// exports.resolve = function(data) {
//   async.waterfall([
//     async.apply(validateSessionCode, data),
//     async.apply(isConnected, data),
//     connectClient
//   ]);
// };

function validateSessionCode(data, input) {
  agentController
    .hasHash(data)
    .then(function(response) {
      if (response) {
        logger.agent(data.username + ' from group: ' + data.group + ' reconnected');

        callback(true);
      }

      callback(null, data);
    });
};

function isConnected(data, callback) {
  console.log('SECOND');
  clientController
    .fetchClient(data)
    .then(function(response) {
      if (response) {
        logger.agent(data.username + ' from group: ' + data.group + ' reconnected');

        callback(true);
      }

      callback(null, data);
    });
}

function connectClient(data, callback) {
  console.log('THIRD');
  clientController
    .connectClient(data)
    .then(function(response) {
      logger[response.type](response.username + ' from group: ' + response.group + ' connected');
    });
}
