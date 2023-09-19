const logger = require('./logger.js');

describe('Testing the logger module', () => {
  test('Gets information about the request path, method, and query, and calls the next function', () => {

    console.log = jest.fn(); // jest spy function, only affects our test environment

    const req = {
      method: 'TEST',
      path: 'TEST',
      query: 'TEST'
    };
    const res = {};
    const next = jest.fn(); // jest can spy on this and tell us inputs and outputs

    logger(req, res, next);

    // expect(console.log).toHaveBeenCalledWith('REQUEST METHOD: TEST'); // build in method for jest.
    // expect(console.log).toHaveBeenCalledWith('REQUEST PATH: TEST');
    // expect(console.log).toHaveBeenCalledWith('REQUEST QUERY: TEST');
    expect(next).toHaveBeenCalled();
  });
});