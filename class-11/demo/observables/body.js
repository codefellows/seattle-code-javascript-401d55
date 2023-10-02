'use strict';

const eventEmitter = require('./lib/eventPool.js');
const handleTemperature = require('./lib/handleTemperature.js');
const handleTired = require('./lib/handleTired.js');
const handleHunger = require('./lib/handleHunger.js');

// turn on the subscriber for temperature
eventEmitter.on('temperature', handleTemperature);
eventEmitter.on('hunger', handleHunger);
eventEmitter.on('tired', handleTired);

// the order in which events are published, determines the order in which subscribers are run.
eventEmitter.emit('tired', { isTired: true });
eventEmitter.emit('temperature', { temperature: Math.floor((Math.random() * 100)) + 1 });
eventEmitter.emit('hunger', { food: 'ramen' });