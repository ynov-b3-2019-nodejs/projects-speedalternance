const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://birametgod:ID6nlTZu07PYxCbd@cluster0-c7tiq.mongodb.net/spreedAlternance',
    { useCreateIndex: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log(`connected to database`);
  })
  .catch(() => {
    console.log('Connection failed !');
  });

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