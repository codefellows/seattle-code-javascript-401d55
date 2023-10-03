//our Websocket server

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;

// generic server, no namespace
let server = new Server(PORT); // as soon as this line runs, we have something to connect to.

// namespace server
let bananaServer = server.of('/banana');

// built-in connection event -> telling the server to wait for client(socket) connections
server.on('connection', (socket) => {

  // think of this as defining a request and response
  socket.on('message', (payload) => {
    console.log('HERE IS OUR MESSAGE PAYLOAD', payload);

    // send out a event to all other client listening for the event
    // broadcast - send message to other clients and ignore the sender
    socket.broadcast.emit('message', payload);
  });
});

// this is a different observable
bananaServer.on('connection', (socket) => {
  console.log('Connection made to banana server!');

  socket.on('message', (payload) => {
    console.log('HERE IS OUR BANANA PAYLOAD', payload);
    socket.broadcast.emit('message', payload);
  });

  socket.on('join', (payload) => {
    console.log('A SOCKET HAS JOINED THR ROOM: ', payload.roomName);
    socket.join(payload.roomName); //method for joining a room server side
    socket.broadcast.to(payload.roomName).emit('join', payload);
  });
});