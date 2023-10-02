'use strict';

const handleTemperature = require('./handleTemperature.js');

beforeEach(() => {
  console.log = jest.fn();
});


describe('Testing the temperature handler', () => {
  test('Should log approiately for temperatures above 70', () => {

    handleTemperature({ temperature: 75 });
    expect(console.log).toHaveBeenCalledWith('Current temperature: 75 *** Taking off clothing layer! ***');
  });

  test('Should log approiately for temperatures below 30', () => {

    handleTemperature({ temperature: 25 });
    expect(console.log).toHaveBeenCalledWith('Current temperature: 25 *** Putting on clothing layer ***');
  });

  test('Should log approiately for temperatures below 30', () => {

    handleTemperature({ temperature: 50 });
    expect(console.log).toHaveBeenCalledWith('Current temperature: 50 *** I feel great ***');
  });
})