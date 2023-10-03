'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3002/banana'); // creates the connection

socket.emit('join', {roomName: '1-800-flowers'});
socket.on('join', (payload) => {
  console.log('Message from room:', payload);
});
