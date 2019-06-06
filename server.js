const app = require('./backend/app');
const debug = require('debug')('node-angular');
const http = require('http');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');
//var history = require('connect-history-api-fallback');

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port;
  console.log('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || '3000');

const staticFileMiddleware = express.static(__dirname + '/frontend/dist');

app.set('port', port);
app.use(staticFileMiddleware);
app.get(/.*/, (req, res) => {
  res.sendFile(__dirname + '/frontend/dist/index.html');
});
// app.use(history({
//   verbose: true
// }));
// app.use(staticFileMiddleware)
const server = http.createServer(app);
const io = socketIo.listen(server);
io.on('connection', socket => {
  console.log('user connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});
server.on('error', onError);
server.on('listening', onListening);
server.listen(port);
exports.server = server;
exports.io = io;
