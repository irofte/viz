var mongoose = require('mongoose');

module.exports = function() {
  mongoose.Promise = require('q').Promise;

  mongoose.connect('mongodb://localhost/viz');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));

  db.once('open', function() {
    console.log('connected to viz database');
  });
}
