'use strict';

const supertest = require('supertest');
const app = require('../lib/server.js').app;
const { sequelize, UserModel } = require('../lib/models');
const request = supertest(app);
const base64 = require('base-64');

let testUser;

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});
beforeEach(async () => {
  testUser = await UserModel.create({ username: 'test', password: 'test' });
});
afterEach(async () => {
  await UserModel.destroy({ where: { username: 'test' }});
});

describe('Testing the auth workflow', () => {
  test('Should be able to register a user on POST /signup', async () => {
    let response = await request.post('/signup').send({
      username: 'Jacob',
      password: 'test'
    });

    console.log(response.body);
    expect(response.status).toBe(201);
    expect(response.body.username).toBe('Jacob');
    expect(response.body.token).toBeTruthy();
  });

  test('Should be able to login in an existing user', async () => {
    let encodedCredentials = base64.encode('Jacob:test');

    let response = await request.post('/signin').set({
      Authorization: `Basic ${encodedCredentials}`
    });

    console.log('USER FROM RESPONSE BODY', response.body);
    expect(response.status).toBe(200);
    expect(response.body.username).toBe('Jacob');
  });

  test('Token can be exchanged for secure data', async () => {
    let response = await request.get('/secure').set({
      Authorization: `Bearer ${testUser.token}`
    });

    expect(response.status).toBe(200);
    expect(response.body.data.username).toEqual('test');
  });
});