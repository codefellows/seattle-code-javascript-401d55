'use strict';

const OrderModel = (sequelize, DataTypes) => sequelize.define('Orders', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}); // what does sequelize define give us? -> table

module.exports = OrderModel;