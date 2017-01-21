var handleSockets = require('./handleSockets'),
    logger = require('./logger');

module.exports = function(socket) {
  socket.on('accountReconnected', function(data) {
    handleSockets.addAgent(data);

    socket.join(data.group);

    if (data.username) {
      logger.agent(data.username + ' reconnected in GROUP: ' + data.group);
    } else {
      logger.client(data.name + ' reconnected in GROUP: ' + data.group);
    }

  });
};
