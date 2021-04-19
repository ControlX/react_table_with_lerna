const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: String,
  email: String,
  type: String,
  appliedJobs: Array
});

const User = mongoose.model('users', UserSchema);

module.exports = User;