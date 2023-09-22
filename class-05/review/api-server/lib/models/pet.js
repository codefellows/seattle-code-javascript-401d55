'use strict';

const PetModel = (sequelize, DataTypes) =>
  sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

module.exports = PetModel;
