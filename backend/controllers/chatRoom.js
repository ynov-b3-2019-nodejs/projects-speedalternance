const Chat = require('../models/chatRoom');
const express = require('express');
const app = require('../app');
const connection = require('../../connection');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

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
  if (!currentChat) {
    return res.status(500).json({
      message: ' not found '
    });
  }
  return res.status(200).json(currentChat);
};

exports.getCurrentUserChat = async (req, res, next) => {
  let contactUser = [];
  const token = req.headers.authorization.split(' ')[1];
  const userData = jwt.verify(token, 'my_token_is_secret');
  const id = mongoose.Types.ObjectId(userData.userId);
  const allChat = await Chat.find({});
  if (!allChat) {
    return res.status(500).json({
      message: ' not found '
    });
  }
  const currentUserChats = allChat.filter(chat => {
    return chat.users_id.includes(userData.userId);
  });
  // if (currentUserChats.length > 0) {
  //   //parcourt tous les chats propre à l'utilisateur
  //   const birame = currentUserChats.map(chat => {
  //     let contactUsersChat = [];
  //     const contact = [...chat.users_id];
  //     const index = contact.indexOf(userData.userId);
  //     if (index > -1) {
  //       contact.splice(index, 1);
  //     }
  //     //cree array contact
  //     contact.forEach(user => {
  //       if (user.toString() !== userData.userId) {
  //         const user = await User.findById(mongoose.Types.ObjectId(user));
  //         contactUser.push(user);
  //       }
  //     });
  //     console.log(contactUser);
  //     return {
  //       chat,
  //       contact: contactUser
  //     };
  //   });
  //   console.log(birame);
  // }
  return res.status(200).json(currentUserChats);
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
