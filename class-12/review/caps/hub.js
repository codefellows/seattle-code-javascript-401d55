'use strict';

const eventEmitter = require('./eventPool.js');
require('./driver');

const curryLogger = (type) => (payload) => {
  const event = {
    event: type,
    time: new Date(),
    payload,
  }

  console.log(`EVENT`, event);
}

function logger(type, payload) {

  const event = {
    event: type,
    time: new Date(),
    payload,
  }

  console.log(`EVENT`, event);
}

eventEmitter.on('pickup', curryLogger('pickup'));
eventEmitter.on('in-transit', (payload) => logger('in-transit', payload));
eventEmitter.on('delivered', (payload) => logger('delivered', payload));

// running all the code in the barrel file
require('./vendor');
