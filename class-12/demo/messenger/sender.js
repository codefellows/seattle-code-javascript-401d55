'use strict';

const io = require('socket.io-client');

// connect to the server, and creates a "socket";
const socket = io.connect('http://localhost:3002');

socket.on('message', (payload) => {
  console.log('SENDER HAS RECEIVED: ', payload);
});
socket.emit('message', { text: 'Hello Server!'});

// socket.close();