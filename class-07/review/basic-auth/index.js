'use strict'

require('dotenv').config();
const server = require('./src/server.js');
const { Sequelize, DataTypes } = require('sequelize');

// instantiate our server and our DB connection
const PORT = process.env.PORT || 3001;
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const DATABASE_URL = 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL, {logging: false});

sequelize.sync()
  .then( () => {
    server.start(PORT)
  });

