'use strict';

const PersonModel = (sequelize, DataTypes) =>
  sequelize.define('Person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = PersonModel;
