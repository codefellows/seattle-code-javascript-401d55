'use strict';

const express = require('express');
const cors = require('cors');
const basicAuth = require('./auth/middleware/basic.js');
const pathValidator = require('./middleware/pathValidator.js')
const methodValidator = require('./middleware/methodValidator.js')
const errorHandler = require('./middleware/errorHandler.js')
const app = express(); // singleton -> there can only be one
const { handleSignup, handleSignin} = require('./auth/router.js');

app.use(cors());
app.use(express.json()); // json
app.use(express.urlencoded({ extended: true })) ;// form data


// shout out to Chester for the error handling!
app.use(methodValidator);
app.use(pathValidator);

app.post('/signup', basicAuth, handleSignup);
app.post('/signin', basicAuth, handleSignin);

app.use(errorHandler)

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Express now running on port:', port);
    });
  }
}