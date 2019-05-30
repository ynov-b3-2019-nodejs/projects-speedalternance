const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    publisherId: { type: Number, required: true },
    isJobOffer: {type: Boolean, required: true},
    title: { type: String, required: true },
    content: { type: String,required: true }
  });

  module.exports = mongoose.model('Post', postSchema);