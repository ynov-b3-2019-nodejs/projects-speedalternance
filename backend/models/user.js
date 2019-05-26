const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  file: { type: String, required: true },
  picture: String,
  competencies: [String]
});

module.exports = mongoose.model('User', userSchema);
