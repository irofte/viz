var chalk = require('chalk');

module.exports = {
  info: function(message) {
    console.log(chalk.blue('INFO: ' + message));
  },
  agent: function(message) {
    console.log(chalk.yellow('AGENT: ' + message));
  },
  client: function(message) {
    console.log(chalk.green('CLIENT: ' + message));
  }
};
