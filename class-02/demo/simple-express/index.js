'use strict';

const server = require('./lib/server2.js');
const PORT = process.env.PORT || 3001;

// entry point!
server.start(PORT);
