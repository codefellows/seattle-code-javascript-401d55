'use strict';

const eventEmitter = require('../eventPool.js');
const handlePickup = require('./handler.js');

eventEmitter.on('pickup', handlePickup);
