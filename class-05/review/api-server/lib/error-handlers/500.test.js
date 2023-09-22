const error500 = require('./500.js');

describe('Testing the 500 module', () => {
  test('Gets information about the request error with property called message', () => {
    console.log = jest.fn();
    const error = {
      message: 'TEST',
      }
    const request = {};
    const response = {
      status: jest.fn(() => response),
      send: jest.fn(),
    };
    const next = jest.fn();

    error500(error, request, response, next);

    expect(console.log).toHaveBeenCalledWith('ERROR MESSAGE: TEST');
  });
});
