'use strict';

const {createOrder, handleDelivered} = require('../vendor/handler.js');



beforeEach(() => {
  console.log = jest.fn();
});

describe('Testing if create order', () => {
  test('Should create an order object', () => {
    const results = createOrder('567-flowers');

    const expectedOrder = {
      store: '567-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    };
   
    expect(results).toEqual(expectedOrder);
  });
});

describe('Testing handle delivered function', () => {
  test('Should log thank you with customer name when called', () => {
    handleDelivered({
      store: '1-206-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    });
    expect(console.log).toHaveBeenCalled();
  });
});