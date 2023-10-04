'use strict';

const io = require('socket.io-client');

// authenicate here
const socket = io.connect('http://localhost:3002/messages'); // can;t connect until we have a token??


socket.on('messages', (payload) => {
  console.log('I see the message!', payload);

  socket.emit('received', payload);
});

socket.emit('get-messages', ({ clientId: 'client2' }));