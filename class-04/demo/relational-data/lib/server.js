'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const customerRouter = require('./routes/customers');

app.use(cors());
app.use(express.json());

app.use('/api', customerRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('App is running!!')
    })
  }
}