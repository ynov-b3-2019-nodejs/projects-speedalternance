const Chat = require('../models/chatRoom');
const express = require('express');
const app = require('../app');
const connection = require('../../connection');

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
      connection.sendEvent('new-message', chat);
      return res.status(200).json({
        response,
        message: 'update successfully'
      });
    }
  );
};

exports.createChat = (req, res, next) => {
  const chat = new Chat();
  chat.users_id = req.body.users_id;
  chat.messages = req.body.messages;
  chat
    .save()
    .then(result => {
      connection.sendEvent('new-message', result);
      res.status(200).json({
        chat: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'failed',
        error: err
      });
    });
};
