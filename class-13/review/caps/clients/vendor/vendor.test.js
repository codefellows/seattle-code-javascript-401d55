'use strict';

const { handleDelivery, createPickUp } = require('./handler.js');
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3002');

beforeEach(() => {
  console.log = jest.fn();
  socket.emit = jest.fn();
});

describe('Testing Vendor Handler', () => {
  it('Should alert system when there is a package to be picked up', () => {
    let order = createPickUp('Not Walmart');

    expect(order.store).toBe('Not Walmart');
  });

  it('Should notify vendor when package is delivered', () => {
    let payload = {
      customer: 'any string',
    };

    handleDelivery(payload);

    expect(console.log).toHaveBeenCalledWith('Thank you for your order ' + payload.customer);
  });
});
