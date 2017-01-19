var mongoose = require('mongoose');

module.exports = function() {
  mongoose.Promise = require('q').Promise;

  mongoose.connect('mongodb://localhost/pentapark');

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error'));

  db.once('open', function() {
    console.log('connected to pentapark database');
  });
}
