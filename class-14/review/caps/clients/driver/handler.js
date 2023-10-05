'use strict';

const socket = require('./index.js');

const handlePickUp = (payload) => {
  console.log('DRIVER: picked up ', payload.orderId);  
  socket.emit('in-transit', payload);

  setTimeout(() => {
  
    console.log('DRIVER: delivered ', payload.orderId);
    socket.emit('delivered', payload);
  }, 3000);
  
};
module.exports = handlePickUp;