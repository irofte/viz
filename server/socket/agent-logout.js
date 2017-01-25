var agentController = require('./socket-db/agent/agent.controller')
    logger = require('./logger');

module.exports = function(socket) {
  socket.on('agentLogout', function(agent) {
    agentController
      .removeAgent(agent)
      .then(function(response) {
        logger[agent.type](agent.username + ' from group: ' + agent.group + 'disconnected');
      });
  });
};
