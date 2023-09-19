const serverError = require('./serverError.js');

describe('Testing our error handler', () => {
  test('Should return a 500 when prompted', () => {

    const err = {
      code: 500,
      message: 'Server error'
    }
    const req = {}
    // all res methods return the same res object
    const res = {
      status: jest.fn(() => res),
      json: jest.fn(() => res),
      send: jest.fn(() => res),
    }
    const next = jest.fn();

    serverError(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
  });
});