const Chat = require('../models/chat');

exports.getChat = async (req, res, next) => {
  const allChat = await Chat.find({});
  if (!allChat) {
    return res.status(500).json({
      message: 'not Found'
    });
  }
  return res.status(200).json(allChat);
};
