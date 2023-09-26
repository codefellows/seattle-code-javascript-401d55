'use strict';

require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const DATABASE_URL = 'sqlite:memory:';

const user = require('./users-model.js');
const sequelize = new Sequelize(DATABASE_URL, { logging: false});

const userModel = user(sequelize, DataTypes);

sequelize.sync();

module.exports = {
  userModel,
}

