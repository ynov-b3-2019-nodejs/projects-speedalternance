let socketValue = null;
let io = null;

exports.connect = server => {
  io = require('socket.io')(server);
  io.on('connection', socket => {
    console.log('user connected');
    socketValue = socket;
    socketValue.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

exports.sendEvent = (event, data) => {
  io.emit(event, data);
};
