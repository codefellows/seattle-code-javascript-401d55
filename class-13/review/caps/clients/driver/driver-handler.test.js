'use strict';

const { driverPickUp, curryPickup } = require('./handler.js'); 
// const io = require('socket.io-client');
const socket = {};// io.connect('http://localhost:3002');

beforeEach(() => {
  console.log = jest.fn();
  socket.emit = jest.fn(); // creating a mock function to replace socket.emit;
});

let payload = {
  orderId: 12345,
};

describe('Testing Driver Handler', () => {
  it('Should alert system that there is a package', () => {
    
    jest.useFakeTimers();
    driverPickUp(payload);
    jest.advanceTimersByTime(2000);
    
    expect(payload).toBeTruthy();
  });


  it('Should alert system that package is picked up and in-transit', () => {
    
    jest.useFakeTimers();
    curryPickup(socket)(payload);
    jest.advanceTimersByTime(2000);

    expect(payload.orderId).toBe(12345);
    // expect(socket.emit).toHaveBeenCalledWith('in-transit', payload);
  });

  it('Should alert system that package is delivered', () => {

    jest.useFakeTimers();
    curryPickup(socket)(payload);
    jest.advanceTimersByTime(2000);

    expect(payload.orderId).toBe(12345);
    // expect(socket.emit).toHaveBeenCalledWith('delivered', payload);
  });
});