const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatRoomSchema = Schema({
  sender_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  receiver_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  emit_by: String,
  created_date: { type: Date, default: Date.now },
  content: String
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
