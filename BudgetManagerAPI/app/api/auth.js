const mongoose = require('mongoose'),
      jwt = require('jsonwebtoken'),
      config = require('@config');

const api = {};

api.login = (User) => (req, res) => {
  User.findOne({ username: req.body.username }, (error, user) => {
    if (error) throw error;

    if (!user) res.status(401).send({ success: false, message: 'Authentication failed. User not found.' });
    else {
      user.comparePassword(req.body.password, (error, matches) => {
        if (matches && !error) {
          const token = jwt.sign({ user }, config.secret);
          res.json({ success: true, message: 'Token granted', token });
        } else {
          res.status(401).send({ success: false, message: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
}
