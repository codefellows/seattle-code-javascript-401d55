'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Pokemon = require('./pokemon.js');

const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_CONNECTION_STRING); // this is a singleton.

module.exports = {
  sequelize,
  PokemonModel: Pokemon(sequelize, DataTypes)
}