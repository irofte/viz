module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    console.log('general client connected' + socket.id);

    require('../groups/bogdan/bogdan')(socket);

    socket.on('accountReconnected', function(data) {
      console.log('Account ' + data + ' reconnected');

      socket.join(data);
      console.log('Account ' + data + ' joined group ' + data);
    });

    socket.on('createGroup', function(data) {
      console.log('group ' + data + ' created', data);

      socket.join(data);
    });
  }
};
