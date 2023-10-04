'use strict';

const { Server } = require('socket.io');
const MessageQueue = require('../lib/MessageQueue');
const PORT = process.env.PORT || 3002;

let server = new Server(PORT);
let messages = server.of('/messages');

let queue = new MessageQueue();

messages.on('connection', (socket) => {
  socket.on('message', (payload) => {

    // add the payload to a new Queue, for a specific client.
    let clientQueue = queue.read(payload.clientId);
    if (!clientQueue) {
      let key = queue.store(payload.clientId, new MessageQueue());
      clientQueue = queue.read(key);
    }
    clientQueue.store(payload.messageId, payload);
    console.log(queue.read(payload.clientId));

    socket.broadcast.emit('message', payload);
  });

  socket.on('get-messages', (payload) => {
    let clientQueue = queue.read(payload.clientId);
    let keys = Object.keys(clientQueue.data);

    for (let i =0; i < keys.length; i++) {
      let message = clientQueue.read(keys[i]);
      socket.emit('messages', message);
    }
  });
  
  socket.on('received', (payload) => {
    let clientQueue = queue.read(payload.clientId);
    if (clientQueue) {
      clientQueue.remove(payload.messageId);
    }
    console.log(queue);
  });
});

