module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    console.log('client connected');

    socket.on('join', join);

    function join(data) {
      socket.account = data.account[0].group;

      console.log('AAAA', socket.id);
      socket.emit('news', { hello: 'world' });
    }
  }
};
