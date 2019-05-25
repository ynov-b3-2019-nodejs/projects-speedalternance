const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-Width, Content-Type,Accept,Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,DELETE,OPTIONS,PUT'
  );
  next();
});
app.use('/api/user', userRoutes);
app.use('/', (req, res) => {
  return res.status(200).json({
    testing: 'good'
  });
});

module.exports = app;
