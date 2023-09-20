'use strict'
 
//entry point to the server
// 1. should require src/server.js
// 2. should require dotenv, reading PORT from your .env file
// 3. It should call the .start() method from the server with the PORT set in your environment

const server = require('./lib/server.js')
const PORT = process.env.PORT || 3001;
//entry point
server.start(PORT);
