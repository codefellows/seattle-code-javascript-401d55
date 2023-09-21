'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const { sequelize } = require('../src/models/');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
  await sequelize.close();
});

// Tests for /api/food route
describe('Testing the REST /food Router', () => {
  // Test CREATE
  test('Should CREATE food (/food)', async () => {
    let response = await request.post('/api/food').send({
      name: 'Banana',
      type: 'fruit',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Banana');
  });

  // Test READ
  test('Should READ food (/food)', async () => {
    let response = await request.get('/api/food');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  // Test UPDATE
  test('Should UPDATE food (/food/1)', async () => {
    let response = await request.patch('/api/food/1').send({
      name: 'Apple',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Apple');
  });

  // Test Delete
  test('Should DELETE food (/food/1)', async () => {
    let response = await request.delete('/api/food/1');

    expect(response.status).toEqual(204);
  });
});

// Test for /api/clothes route
describe('Testing the REST /clothes Router', () => {
  // Test CREATE
  test('Should CREATE clothes (/clothes)', async () => {
    let response = await request.post('/api/clothes').send({
      name: 'Shirt',
      type: 'short sleeve',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Shirt');
  });

  // Test READ
  test('Should READ clothes (/clothes)', async () => {
    let response = await request.get('/api/clothes');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  // Test UPDATE
  test('Should UPDATE clothes (/clothes/1)', async () => {
    let response = await request.patch('/api/clothes/1').send({
      type: 'long sleeve',
    });

    expect(response.status).toEqual(200);
    expect(response.body.type).toEqual('long sleeve');
  });

  // Test DELETE
  test('Should DELETE clothes (/clothes/1)', async () => {
    let response = await request.delete('/api/clothes/1');

    expect(response.status).toEqual(204);
  });
});
