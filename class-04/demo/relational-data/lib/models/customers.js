'use strict';

const CustomerModel = (sequelize, DataTypes) => sequelize.define('Customers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phoneNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}); // what does sequelize define give us? -> table

module.exports = CustomerModel;
