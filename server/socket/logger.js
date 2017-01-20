var chalk = require('chalk');

module.exports = {
  info: function(message) {
    console.log(chalk.blue('INFO: ' + message));
  }
};
