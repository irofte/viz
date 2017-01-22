var logger = require('./logger'),
    identify = require('./identify'),
    // reconnect = require('./reconnect'),
    bogdan = require('../groups/bogdan/bogdan');

module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    logger.info('anonymous client: ' + socket.id + ' connected');

    // bogdan(socket);
    identify(socket);
  }
};
