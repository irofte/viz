var agent = require('./agent');
    // client = require('./client');

module.exports = function(socket) {
  socket.on('identify', function(data) {
    if (data.type === 'agent') {
      agent.resolve(data);
    } else {
      // client.resolve(data);
    }
  });
};
