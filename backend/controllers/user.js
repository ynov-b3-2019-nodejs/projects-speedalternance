const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
  let userFetched;
  User.findOne({ email: req.body.email }, (error, result) => {
    if (error) {
      return res.status(401).json({
        message: 'auth failed',
        err: err
      });
    }

    if (!result) {
      return res.status(401).json({
        message: 'email not correct'
      });
    }

    userFetched = result;
    bcrypt.compare(req.body.password, userFetched.password).then(hash => {
      const token = jwt.sign(
        { email: userFetched.email, userId: userFetched._id },
        'my_token_is_secret',
        {
          expiresIn: '1h'
        }
      );

      if (hash) {
        res.status(200).json({
          message: 'Auth good',
          user: userFetched,
          token: token,
          expiresIn: 3600
        });
      } else {
        return res.status(401).json({
          message: 'password not correct'
        });
      }
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
      competencies: req.body.competencies,
      isStudent: req.body.isStudent,
      isBoss: !req.body.isStudent,
      isConnected: true
    });
    user
      .save()
      .then(result => {
        const token = jwt.sign(
          { email: result.email, userId: result._id },
          'my_token_is_secret',
          {
            expiresIn: '1h'
          }
        );
        res.status(200).json({
          message: 'user created',
          user: result,
          access_token: token
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
