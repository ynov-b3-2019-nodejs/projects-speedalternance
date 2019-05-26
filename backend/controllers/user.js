const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.getUser = (req, res, next) => {
  User.find((err, result) => {
    if (err) {
      return res.status(500).json({
        message: 'sign up failed',
        err
      });
    }
    return res.status(200).json({
      message: 'user done',
      result
    });
  });
};

exports.signUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    // 10 valeur la plus grande pour obtenir un hash securisée
    const user = new User({
      name: req.body.name,
      firstname: req.body.firstname,
      password: hash,
      email: req.body.email,
      file: req.body.file, // pour l'instant on fait ça , n'oublies pas de changer aprés
      picture: req.body.picture, // même chose pour ici
      competencies: req.body.competencies
    });
    user
      .save()
      .then(result => {
        res.status(200).json({
          message: 'user created',
          result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'sign up failed',
          err
        });
      });
  });
};
