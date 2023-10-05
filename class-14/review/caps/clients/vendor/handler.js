'use strict';


const Chance = require('chance');

const chance = new Chance();


const createOrder = (storeName) => {
  const order = {
    store: storeName,
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  return order;
 
};

// handles delivered event
const handleDelivered = (payload) => {
  // console.log('PAYLOAD: ', payload);
  console.log('Thank you for your order ' , payload.customer);
};


module.exports = { createOrder, handleDelivered};
