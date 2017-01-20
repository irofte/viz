var handleSockets = require('./handleSockets');

module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    console.log('general client connected' + socket.id);

    require('../groups/bogdan/bogdan')(socket);

    socket.on('accountReconnected', function(data) {
      console.log('Account ' + data.group + ' reconnected');

      handleSockets.addAgent(data);

      socket.join(data.group);
      console.log('Account ' + data.group + ' joined group ' + data.group);
    });

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
