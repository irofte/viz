var agent = require('./agent'),
    client = require('./client'),
    logger = require('./logger');

module.exports = function(socket) {
  socket.on('identify', function(data) {
    if (data.type === 'agent') {
      agent.resolve(data);
    } else {
      agent.resolve(data);


      //   if (agent) {
      //     socket.emit(agent.clientHash, agent);
      //
      //     socket.join(agent);
      //   } else {
      //     socket.emit('sessionCodeError', 'Session code error');
      //   }
      // } else {
      //   logger.client(data.username + ' from group: ' + data.group + ' reconnected');
      // }
    }

    // handleSockets.addAgent(data);

    // socket.join(data.group);
  });
};


// socket.on('clientConnect', function(clientHash) {
//   console.log('CCC', clientHash);
//   var agent = handleSockets.getAgent(clientHash);
//

// });
