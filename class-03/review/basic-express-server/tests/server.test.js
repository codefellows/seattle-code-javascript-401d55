'use strict';

const supertest = require('supertest');
const app = require('../lib/server.js').app;
const request = supertest(app);

describe('Testing for a name', () => {
  test('Will this return 200 with a name', async () => {
    let response = await request.get('/person?name=Kit');

    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: "Kit" });
  });
});

describe('Testing no name in the query URL', () => {
  test('Will this return a 500 error', async () => {
    let response = await request.get('/person');

    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('ERROR: No Name Provided!');
  });
});

describe('Testing a bad route', () => {
  test('Wil this return a 404 error', async () => {
    let response = await request.get('/incorrectpath');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
  });
});

describe('Testing a bad method', () => {
  test('Will this return a 500', async () => {
    let response = await request.put('/person?name=Kit');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Not Found');
  });
});
