'use strict';

const io = require('socket.io-client');

const bananaSocket = io.connect('http://localhost:3002/banana'); // creates the connection
const socket = io.connect('http://localhost:3002');

// doesn't run until server sends the payload back.
socket.on('message', (payload) => {
  console.log('RECEIVER HAS RECEIVED', payload);

  socket.emit('message', { text: 'payload received' });
});