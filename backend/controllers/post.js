const Post = require('../models/post');

exports.getAll = (req,res,next) => {
    Post.find({},(error, result) => {
        if (error) {
            return res.status(500).json({
              message: error,
              err: error
            });
        }
        if (!result) {
            return res.status(404).json({
              message: 'Not found',
              posts: []
            });
        }
        return res.status(200).json({
            message: 'OK',
            posts: result
        })
    })
}
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