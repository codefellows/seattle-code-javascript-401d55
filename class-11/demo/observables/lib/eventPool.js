'use strict';

const events = require('events');

// a singleton
const eventEmitter = new events.EventEmitter();

module.exports = eventEmitter;
