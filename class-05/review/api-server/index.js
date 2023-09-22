'use strict';

require('dotenv').config();
const { sequelize } = require('./lib/models');
const server = require('./lib/server.js');
const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  server.start(PORT);
});
