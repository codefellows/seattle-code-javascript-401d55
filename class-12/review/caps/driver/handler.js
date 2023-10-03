'use strict';

const eventPool = require('../eventPool.js');

function handlePickup(payload) {
  console.log('DRIVER: picked up ' + payload.orderId);
  eventPool.emit('in-transit', payload);

  setTimeout(() => {
    console.log('DRIVER: delivered up ' + payload.orderId);
    eventPool.emit('delivered', payload);
  }, 2000);
}

module.exports = handlePickup;