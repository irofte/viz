var logger = require('./logger'),
    handleSockets = require('./handleSockets'),
    reconnect = require('./reconnect'),
    bogdan = require('../groups/bogdan/bogdan');

module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    logger.info('anonymous client connected' + socket.id);

    reconnect(socket);
    bogdan(socket);

    socket.on('createGroup', function(data) {
      console.log('group ' + data.group + ' created', data.group);

      handleSockets.addAgent(data);

      socket.join(data.group);
    });

    socket.on('clientConnect', function(clientHash) {
      var agent = handleSockets.getAgent(clientHash);
      console.log('YYY', agent);
      if (agent) {
        socket.emit(clientHash, agent);

        socket.join(agent);
      } else {
        socket.emit('sessionCodeError', 'Session code error');
      }
    });
  }
};
