'use strict';

const articles = (sequelize, DataTypes) => sequelize.define('Articles', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

module.exports = articles;
