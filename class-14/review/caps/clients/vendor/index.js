'using strict';
const CONNECTION_URL = process.env.CONNECTION_URL || 'http://localhost:3002';
const io = require('socket.io-client');
//const eventEmitter = require('../eventPool.js');
const { handleDelivered, createOrder } = require('./handler.js');

const socket = io.connect(CONNECTION_URL+'/caps');
console.log('VENDOR CONNECTED TO CAPS SERVER');

socket.emit('join', {roomName: '1-206-flowers'});
socket.on('delivered', handleDelivered);
socket.emit('pickup', createOrder('1-206-flowers'));
socket.emit('pickup', createOrder('1-206-flowers'));
