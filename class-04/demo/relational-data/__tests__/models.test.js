'use strict';

const { sequelize, CustomerTable, OrderTable } = require('../lib/models');

beforeAll(async () => {
  await sequelize.sync();
})
afterAll(async () => {
  await sequelize.drop();
})

describe('Testing the Model Associations', () => {
  let customer;
  let order;

  test('Should be able to create a Customer with and Order', async () => {

    customer = await CustomerTable.create({
      name: 'Jacob',
      phoneNum: 1112223333,
      email: 'jacob@codefellows.com'
    });
    order = await OrderTable.create({
      name: 'Pizza',
      customerId: customer.id,
    });

    expect(customer.name).toEqual('Jacob');
    expect(order.name).toEqual('Pizza');
    expect(order.customerId).toEqual(customer.id);
  });

  test('Should be able to fetch a customer and include all orders', async () => {

    customer = await CustomerTable.read(customer.id, { include: OrderTable.model });

    console.log(customer.Orders);
    expect(customer.name).toEqual('Jacob');
    expect(customer.Orders).toBeTruthy();
    expect(customer.Orders[0].name).toEqual('Pizza');
  });
});