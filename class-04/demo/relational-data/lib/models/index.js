'use strict';

require('dotenv').config();

console.log('CURRENT ENVIRONMENT', process.env.NODE_ENV);

const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const { Sequelize, DataTypes} = require('sequelize');

const orders = require('./orders.js');
const customers = require('./customers.js');
const Collection = require('./Collection.js');

const sequelize = new Sequelize(SQL_CONNECTION_STRING);

const OrderModel = orders(sequelize, DataTypes);
const CustomerModel = customers(sequelize, DataTypes);

// creates our relations in the SQL table
OrderModel.belongsTo(CustomerModel, { foreignKey: 'customerId', targetKey: 'id' }); // if you don't do this you cannot grab customer with your order.
CustomerModel.hasMany(OrderModel, { foreignKey: 'customerId', sourceKey: 'id' }); // if don't do this you cannot grab order with your customer.

module.exports = {
  sequelize,
  OrderTable: new Collection(OrderModel),
  CustomerTable: new Collection(CustomerModel),
}
