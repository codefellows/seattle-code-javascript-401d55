'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const foodRouter = require('./routes/food.js');
const clothesRouter = require('./routes/clothes.js');
const notFoundHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');

app.use(cors());
app.use(express.json());
app.use('/api', foodRouter);
app.use('/api', clothesRouter);

// errorHandlers go down
app.use(notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on port ::', PORT);
    });
  },
};
