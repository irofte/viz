module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    console.log('general client connected');

    require('../groups/bogdan/bogdan')(io, socket);

    socket.on('createGroup', function(data) {
      console.log('group ' + 'mimi' + ' created', data);

      socket.join('mimi');
    });
  }
};
