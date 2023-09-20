'use strict';

const express = require('express');
const cors = require('cors');
const app = express(); // singleton -> there can only be one

const pokemonRouter = require('./router.js');

app.use(cors());
app.use(express.json());
app.use('/api', pokemonRouter);

// errorHandlers go down

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  }
}