var agents = [];

exports.addAgent = function(agent) {
  var duplicate = agents.filter(function(item) {
    return item.group === agent.group;
  }).length;

  if (!duplicate) {
    agents.push(agent);
  };
};

exports.getAgent = function(clientHash) {
  var agent = agents.filter(function(item) {
    return item.clientHash === clientHash;
  });

  return agent.length ? agent[0].group : false;
};
