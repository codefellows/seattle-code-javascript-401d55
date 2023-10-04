'use strict';

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

let server = new Server(PORT); 
let caps = server.of('/caps');


// Built in connection event
server.on('Connection', (socket) => {
  console.log('connected to general socket server');
  //Defining a request and a response
  socket.on('message', (payload) => {
    console.log('Here is a msg', payload);

    // Send out a event to all other clients listening
    // Broadcast - send msg to other clients and ignore the sender
    socket.broadcast.emit('message', payload);
  });
});


caps.on('connection', (socket) => {
  console.log('Connection to vendor server');

  socket.on('message', (payload) => {
    console.log('Here is vendor payload', payload);
  });

  // we need events for pickup / in-transit / delivered
  socket.on('pickup', (payload) => {
    console.log('Pickup!', payload);
    // send our payload to our subscribers:
    socket.broadcast.to(payload.store).emit('pickup', payload);
  });
  socket.on('in-transit', (payload) => {
    console.log('in-transit!', payload);
  });
  socket.on('delivered', (payload) => {
    console.log('delivered!', payload);
    socket.broadcast.to(payload.store).emit('delivered', payload);
  });

  socket.on('join', (payload) => {
    console.log('A socket has joined a room: ', payload.storeName);
    socket.join(payload.storeName); // Method for joining a room server side
    socket.broadcast.to(payload.storeName).emit('join', payload);
  });
});


// server.listen();
