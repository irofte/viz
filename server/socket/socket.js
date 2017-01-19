var groups = require('../groups/groups.js');

module.exports = function(io) {
  io.on('connection', connection);

  function connection(socket) {
    // console.log('client connected');

    socket.on('createGroup', function(data) {
      var nsp = groups.createGroup(io, data.groupName);

      nsp.on('connection', function(socket) {
        console.log('someone connected');
      });
    });


  }
};
