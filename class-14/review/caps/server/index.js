'using strict';

const handleGlobalPackageEvents = require('./handler.js');
const MessageQueue = require('../model/MessageQueue.js');
const {Server} = require('socket.io');
const PORT = process.env.PORT || 3002;

// generic server with no namespace
let server = new Server(PORT);
console.log('SServer Started ');


// namespace server
let capsServer = server.of('/caps');
let driverQueue  = new MessageQueue();
// built-in connection event that tells the server to wait for socket(clients) connections
server.on('connection', (socket) => {
  console.log('IM LISTENING');
  // Creation of list events we are listening for in this server
  socket.on('message', (payload) => {
    console.log('heard', payload);
    socket.broadcast.emit('message', payload);
  });

});

// different observation of the same event
capsServer.on('connection', (socket) => {
  console.log('Connection made to caps server!');
  // list of all the events we are listening for in this server
  socket.on('pickup', (payload) => {
    handleGlobalPackageEvents('pickup', payload); 
    let clientQueue = driverQueue.read(payload.store); // what is stored in the queue for the store (ID)
    if(!clientQueue){
      clientQueue = new MessageQueue();
      driverQueue.store(payload.store, clientQueue);
    } 
    clientQueue.store(payload.orderId, payload);
    socket.broadcast.emit('pickup', payload);
    console.log('QUEUE: ', clientQueue);
  });

  socket.on('recieved', (payload) => {
    // run the risk of the client queue being null / undefined -> chained method will give a typeError
    driverQueue.read(payload.store).remove(payload.orderId); // chaining our queue methods together.
    console.log('DELETED ORDER', driverQueue.read(payload.store));
  });
  
  socket.on('in-transit',  (payload) => {
    handleGlobalPackageEvents('in-transit', payload);
    socket.broadcast.emit('in-transit', payload);
  });
  socket.on('delivered',  (payload) => {
    handleGlobalPackageEvents('delivered', payload);
    socket.broadcast.emit('delivered', payload);
  });

  socket.on('get-orders', (payload) => {
    console.log('REtrieving orders for ', payload);
    let storeQueue = driverQueue.read(payload);
    if(storeQueue){
      // [{Order}, {Order}]
      Object.values(storeQueue.data).forEach((order => socket.emit('pickup' , order)));
    }
    
  });

  socket.on('join', (payload) => {
    console.log('A SOCKET HAS JOINED THE ROOM: ', payload.roomName);
    socket.join(payload.roomName); // method for joining a room server-side
    socket.broadcast.to(payload.roomName).emit('join', payload);
  });
});
