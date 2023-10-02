'use strict';

const events = require('events'); // built in node event library;

const observable = new events.EventEmitter(); // creates our observable.

let counter = 0;

// our first subscriber
observable.on('banana', (payload) => {
  counter++;
  console.log('Banana has occurred: ', payload);
  if (counter > 10) {
    return 0;
  } else {
    observable.emit('banana', {data: 'this has run ' + counter + ' times.'}); // this might be recursive.
  }
});

observable.emit('banana', {data: 'banana is ripe'}); // publisher of things changing.

// how many event does the body respond to?