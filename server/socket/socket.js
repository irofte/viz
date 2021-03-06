var logger = require('./logger'),
    identify = require('./identify'),
    agentLogout = require('./agent-logout'),

    // reconnect = require('./reconnect'),
    bogdan = require('../groups/bogdan/bogdan');

module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    logger.info('anonymous client: ' + socket.id + ' connected');

    // bogdan(socket);
    identify(socket);
    agentLogout(socket);
  }
};
