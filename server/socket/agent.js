var agent = require('./identity'),
    logger = require('./logger');

exports.resolve = function(data) {
  var connected = agent.checkConnection(data);

  if (!connected) {
    agent.connect(data);

    return;
  }

  logger.agent(data.username + ' from group: ' + data.group + ' reconnected');
};
