'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('http://localhost:3002/caps');
// const socket = io.connect('http://localhost:3002');
const { driverPickUp, curryPickup } = require('./handler.js');

capsSocket.emit('join', {storeName: '1-206-flowers' });
capsSocket.on('pickup', curryPickup(capsSocket));

// socket.on('join', (payload) => {
//   console.log('Message from room: ', payload);
// });
capsSocket.on('join', (payload) => {
  console.log('You have joined the room!', payload);
});

