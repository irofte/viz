module.exports = function(socket) {

  socket.on('message', function(data) {
    console.log(socket.rooms);
    console.log('message', data);

    socket
      .to('bogdan')
      .emit('show-message', 'cacamaca');
  })

  socket.on('disconnect', function () {
    console.log('DDDISSCOONNECCCTTT');
  });
};
