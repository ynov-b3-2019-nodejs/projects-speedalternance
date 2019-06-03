const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  file: String,
  picture: String,
  competencies: [String],
  isStudent: { type: Boolean, required: true },
  isBoss: { type: Boolean, required: true },
  isConnected: Boolean
});

module.exports = mongoose.model('User', userSchema);
