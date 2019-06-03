const Chat = require('../models/chatRoom');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(4000);

io.on('connection', () => {
  console.log('user connected');
});

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

exports.updateChat = (req, res, next) => {
  const chat = {
    sender_id: req.body.sender,
    receiver_id: req.body.receiver,
    emit_by: req.body.emitBy,
    content: req.body.content
  };
  Chat.findByIdAndUpdate(
    req.params.id,
    { $push: { messages: chat } },
    (err, response) => {
      if (err) {
        return res.status(404).json({
          error: err
        });
      }
      io.emit('new-message', chat);
      return res.status(200).json({
        response,
        message: 'update successfully'
      });
    }
  );
};

exports.createChat = (req, res, next) => {
  const chat = new Chat();
  chat.messages.push({
    sender_id: req.body.sender,
    receiver_id: req.body.receiver,
    emit_by: req.body.emitBy,
    content: req.body.content
  });
  chat
    .save()
    .then(result => {
      io.emit('new-message', result);
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
