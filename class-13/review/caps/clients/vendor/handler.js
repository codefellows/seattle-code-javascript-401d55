'use strict';

const Chance = require('chance');
// I think chance is a constructor / class;
const chance = new Chance();

function handleDelivery(payload) {
  console.log('Thank you for your order ' + payload.customer);
}

function finishedDelivery(payload) {
  console.log('Thank you for your order ' + payload.orderId);
}

function createPickUp(storeName) {
  return {
    store: storeName,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
}

module.exports = {
  handleDelivery,
  finishedDelivery,
  createPickUp,
};