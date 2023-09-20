'use strict';

// const { Sequelize, DataTypes } = require('sequelize');

// const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

// const sequelize = new Sequelize(SQL_CONNECTION_STRING); // this is a singleton.

// make sure you include the name of the table
const PokemonModel = (sequelize, DataTypes) => sequelize.define('Pokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = PokemonModel
