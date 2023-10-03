'use strict';

// create the observable
const events = require('events');

const eventEmitter = new events.EventEmitter();

module.exports = eventEmitter;
