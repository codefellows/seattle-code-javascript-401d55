// to test auth/basic.js

const basicAuth = require('./basic.js');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { userModel } = require('../models');

beforeAll(async () => {
  await userModel.create({
    username: 'Jacob',
    password: await bcrypt.hash('test', 10),
  });
});

describe('Tests for basic auth middleware', () => {
  test('Should parse basic auth header', async () => {
    let encodedCredentials = base64.encode('Jacob:test');
    const authHeader = {
      authorization: `Basic ${encodedCredentials}`
    }
    const req = {
      path: '/signin',
      headers: authHeader
    }
    const res = null;
    const next = jest.fn(); // spy function that jest can track

    basicAuth(req, res, next);

    expect(next).toHaveBeenCalled();
  });
});
