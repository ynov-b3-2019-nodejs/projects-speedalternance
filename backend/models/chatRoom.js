const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = Schema({
  emit_by: String,
  created_date: { type: Date, default: Date.now },
  content: String
});
const chatRoomSchema = Schema({
  users_id: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  messages: [messageSchema]
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);
