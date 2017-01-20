var handleSockets = require('./handleSockets');

module.exports = function(socket) {
  socket.on('accountReconnected', function(data) {
    console.log('Account ' + data.group + ' reconnected');

    handleSockets.addAgent(data);

    socket.join(data.group);
    console.log('Account ' + data.group + ' joined group ' + data.group);
  });
};
