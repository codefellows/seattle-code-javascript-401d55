'use strict'

const { Sequelize, DataTypes } = require('sequelize');
const user = require('./User.js');

const CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

// connect to our DB
let sequelize = new Sequelize(CONNECTION_STRING);

// sequelize.sync(); // call this before you start something that requires DB access. -> greedy synching

module.exports = {
  sequelize,
  UserModel: user(sequelize, DataTypes),
}