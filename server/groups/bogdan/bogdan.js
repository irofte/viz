module.exports = function(io, socket) {
  socket.on('message', function(data) {
    console.log('message', data);
    io.to('bogdan').emit('show-message', data);
  })
};
