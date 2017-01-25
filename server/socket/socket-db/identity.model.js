var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var identitySchema = new Schema({
  group: String,
  username: String,
  password: String,
  type: String,
  clientHash: String
});

module.exports = mongoose.model('agent', identitySchema);
