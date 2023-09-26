'use strict';

const supertest = require('supertest');
const app = require('../src/server.js').app;
const request = supertest(app);
const base64 = require('base-64');

describe('Testing the auth workflow', () => {
  test('Should be able to register a user on POST /signup', async () => {
    let response = await request.post('/signup').send({
      username: 'Jacob',
      password: 'test'
    });

    expect(response.status).toBe(201);
    expect(response.body.username).toBe('Jacob');
  });

  test('Should be able to login in an existing user', async () => {
    let encodedCredentials = base64.encode('Jacob:test');

    let response = await request.post('/signin').set({
      Authorization: `Basic ${encodedCredentials}`
    });

    expect(response.status).toBe(200);
    expect(response.body.username).toBe('Jacob');
  });
});