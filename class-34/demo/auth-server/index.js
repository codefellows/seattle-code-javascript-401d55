'use strict';

require('dotenv').config();
const { sequelize } = require('./lib/models');
const { start } = require('./lib/server.js');

const PORT = process.env.PORT || 3001;

sequelize.sync()
  .then(() => {
    start(PORT);
  });
