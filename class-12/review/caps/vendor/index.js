'use strict';

const eventEmitter = require('../eventPool.js');
const { createPickup, handleDelivery } = require('./handler.js');

eventEmitter.on('delivered', handleDelivery);
eventEmitter.emit('pickup', createPickup('401d55'));
