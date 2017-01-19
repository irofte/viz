var express = require('express'),
    env = process.env.NODE_ENV || 'development',
    app = express(),
    config = require('./server/config/config')[env],
    server = require('http').Server(app),
    io = require('socket.io')(server);

require('./server/config/express')(app, config);
require('./server/api/routes/routes')(app, config);
require('./server/config/routes')(app, config);
require('./server/config/mongooseConnect')();

io.on('connection', function(socket) {
  console.log('client connected');

  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(config.port);

console.log('Listening on port ' + config.port + '...');
