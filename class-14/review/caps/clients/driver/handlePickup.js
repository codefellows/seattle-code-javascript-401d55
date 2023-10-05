'use strict';

const CONNECTION_URL = process.env.CONNECTION_URL || 'http://localhost:3002';
const io = require('socket.io-client');
// const eventEmitter = require('../eventPool.js');
const socket = io.connect(CONNECTION_URL + '/caps');

// TODO: how to pass a instance of the socket to the handler
const handlePickup = (payload) => {
  console.log('DRIVER: picked up ', payload.orderId);
  socket.emit('recieved', payload);
  socket.emit('in-transit', payload);

  setTimeout(() => {
    console.log('DRIVER: delivered ', payload.orderId);
    socket.emit('delivered', payload);
  }, 3000);
};

module.exports = handlePickup;