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
require('./server/socket/socket')(io);

server.listen(config.port);

console.log('Listening on port ' + config.port + '...');
