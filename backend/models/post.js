const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    publisherId: { type: String, required: true },
    isJobOffer: {type: Boolean, required: true},
    title: { type: String, required: true },
    content: { type: String,required: true },
    createdAt: { type: Date,required: true },
  });

  module.exports = mongoose.model('Post', postSchema);