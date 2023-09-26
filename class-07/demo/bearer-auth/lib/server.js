'use strict';

const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.js');
const bearerAuth = require('./middleware/bearer.js');

const app = express();

// apply our middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// attach routers
app.use(authRouter);

// app.use('/api', bearerAuth);

// token authenticate route
app.get('/secure', bearerAuth, (req, res) => {
  console.log('AUTHENTICATE USER', req.user);
  res.send({data: req.user});
});

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('App is listening!'));
  }
}