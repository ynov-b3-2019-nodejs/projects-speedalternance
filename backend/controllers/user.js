const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.getUser = (req, res, next) => {
  User.find({}, (err, result) => {
    if (err) {
      return res.status(401).json({
        message: err.message
      });
    }
    return res.status(200).json(result);
  });
};

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
        const user = {
          _id: userFetched._id,
          competencies: userFetched.competencies,
          email: userFetched.email,
          file: userFetched.file,
          firstname: userFetched.firstname,
          isBoss: userFetched.isBoss,
          isConnected: userFetched.isConnected,
          isStudent: userFetched.isConnected,
          name: userFetched.name,
          picture: userFetched.picture
        };
        res.status(200).json({
          message: 'Auth good',
          user,
          access_token: token,
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
      isConnected: req.body.isConnected
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
        const user = {
          _id: result._id,
          competencies: result.competencies,
          email: result.email,
          file: result.file,
          firstname: result.firstname,
          isBoss: result.isBoss,
          isConnected: result.isConnected,
          isStudent: result.isConnected,
          name: result.name,
          picture: result.picture
        };
        res.status(200).json({
          message: 'user created',
          user,
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
