'use strict';

const io = require('socket.io-client');
const capsSocket = io.connect('http://localhost:3002/caps');

const curryPickup = (socket) => (payload) => {
  console.log('DRIVER: Picked Up' + payload.orderId);
  socket.emit('in-transit', payload);

  setTimeout(() => {
    console.log('DRIVER: Delivered Up' + payload.orderId);
    socket.emit('delivered', payload);
  }, 2000);
};

function driverPickUp(payload) {
  console.log('DRIVER: Picked Up' + payload.orderId);
  capsSocket.emit('in-transit', payload);

  setTimeout (() => {
    console.log('DRIVER: Delivered Up' + payload.orderId);
    capsSocket.emit('delivered', payload);
  }, 2000);
}

module.exports = {
  driverPickUp,
  curryPickup,
};
