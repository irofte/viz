var logger = require('./logger');

var Identity = function() {
  this.identities = [];
};

Identity.prototype.checkConnection = function(input) {
  return !!this.isConnected(input);
};

Identity.prototype.isConnected = function(input) {
  return this.identities.filter(function(item) {
    return item.group === input.group;
  }).length;
};

Identity.prototype.connect = function(input) {
  this.identities.push(input);

  logger[input.type](input.username + ' from group: ' + input.group + ' connected');
};

module.exports = new Identity;
