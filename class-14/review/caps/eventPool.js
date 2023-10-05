const events = require('events'); // built in node event library;
const eventEmitter = new events.EventEmitter(); // creates our observable.


module.exports = eventEmitter;