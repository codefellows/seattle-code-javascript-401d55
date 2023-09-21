'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const FoodModel = (sequelize, DataTypes) =>
  sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = FoodModel;
