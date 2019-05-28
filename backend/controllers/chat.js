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

exports.getCurrentChat = async (req, res, next) => {
  const currentChat = await Chat.findById(req.params.id);
  if (!currentChat)
    return res.status(500).json({
      message: ' not found '
    });
  return res.status(200).json(currentChat);
};

exports.createChat = (req, res, next) => {
  const chat = new Chat({
    sender_id: req.body.sender_id,
    receiver_id: req.body.receiver_id,
    message: req.body.message
  });
  chat
    .then(result => {
      res.status(200).json({
        chat: result
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'failed',
        err
      });
    });
};
