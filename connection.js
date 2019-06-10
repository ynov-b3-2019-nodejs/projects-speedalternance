let socketValue = null;

exports.connect = server => {
  const io = require('socket.io')(server);
  io.on('connection', socket => {
    console.log('user connected');
    socketValue = socket;
    socketValue.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

exports.sendEvent = (event, data) => {
  socketValue.emit(event, data);
};
