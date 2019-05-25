const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('regar mon middleware');
  next();
});

app.use((req, res, next) => {
  res.send('hello from express');
});

module.exports = app;
