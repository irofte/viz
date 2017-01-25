var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema({
  username : String,
  password : String,
  group: String
});

module.exports = mongoose.model('user', accountSchema);
