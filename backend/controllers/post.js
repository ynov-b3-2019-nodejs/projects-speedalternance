const Post = require('../models/post');

exports.new = (req, res, next) =>  {
    const post = new Post({
        publisherId: req.body.publisherId,
        isJobOffer: req.body.isJobOffer,
        title: req.body.title,
        content: req.body.content,
    });

    post
        .save()
        .then( result => {
            res.status(201).json({
                message: 'post created',
                post: result,
              });
        })
        .catch(err => {
            res.status(500).json({
            message: 'La creation du post a échoué',
            err
            });
        });
}