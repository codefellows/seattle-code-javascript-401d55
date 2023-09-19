'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const logger = require('./middlewares/logger.js');
const validator = require('./middlewares/validator.js');
const handleSum = require('./middlewares/handleSum.js');
const handleError = require('./errorHandlers/serverError.js');

app.use(cors());

app.use(logger); // logger middleware
app.use(validator); //validator middleware
app.get('/sum', handleSum); // handle sum method
app.use(handleError); // error handler, 90% of the time errors go at the bottom.

app.use('/*', (req, res) => {
  res.send('Check over here!');
}); // catch all route

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running on PORT ::', port);
    });
  }
};