'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const ClothesModel = (sequelize, DataTypes) =>
  sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = ClothesModel;
