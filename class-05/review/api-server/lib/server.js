'use strict';

const express = require('express');
const cors = require('cors');
const app = express(); //

const personRouter = require('./routes/person.js');
const petRouter = require('./routes/pet.js');
const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');
const pathValidator = require('./middleware/pathValidator.js')
const methodValidator = require('./middleware/methodValidator.js');

app.use(cors());
app.use(express.json());
app.use(pathValidator);
app.use(methodValidator);
app.use('/api', personRouter);
app.use('/api', petRouter);


// If error is path or method related then throw error 404 else throw error 500
app.use((error, request, response, next) => {
  if (error.path || error.method) {
    error404(error, request, response, next);
  } else {
    error500(error, request, response, next);
  }
});

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('REST server is running!');
    });
  },
};
