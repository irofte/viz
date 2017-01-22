var client = require('./identity');

client.assignedAgent = function(input) {
  var assigned = this.identities.filter(function(item) {
    return item.clientHash === input.clientHash;
  });

  return assigned.length ? assigned[0].group : false;
};

// var connected2 = client.checkConnection(data);
//
// if (!connected2) {
//   client.connect(data);
//
//   var agent2 = client.assignedAgent(data);
//
//   console.log('RTY', agent2);

exports.resolve = function() {
  var connected = client.checkConnection(data);

  if (!connected) {
    client.connect(data);
  } else {
    logger.agent(data.username + ' from group: ' + data.group + ' reconnected');
  }
};
