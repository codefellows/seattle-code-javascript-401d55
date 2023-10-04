'use strict';

const io = require('socket.io-client');

let socket = io.connect('http://localhost:3002/messages');

socket.emit('message', {
  messageId: 1,
  text: 'Hello Client 2!',
  clientId: 'client2'
});
socket.emit('message', {
  messageId: 2,
  text: 'Why are you texting me back??',
  clientId: 'client2'
});