const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = Schema({
  sender_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  created_date: { type: Date, default: Date.now },
  message: String
});

module.exports = mongoose.model('Chat', chatSchema);
