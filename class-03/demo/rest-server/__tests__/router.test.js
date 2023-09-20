'use strict';

const supertest = require('supertest');
const server = require('../lib/server.js');
const { sequelize } = require('../lib/models/');
const request = supertest(server.app);

// built in jest function, setup our test suite
beforeAll(async () => {
  await sequelize.sync(); // sets up our tables before tests run
});
afterAll(async () => {
  await sequelize.drop(); // removes the tables we set up for our test environment
});

describe('Testing the REST Router', () => {

  test('Should READ pokemon', async () => {
    let response = await request.get('/api/pokemon');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE pokemon', async () => {
    let response = await request.post('/api/pokemon').send({
      name: 'Pikachu',
      type: 'electric'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Pikachu');
  });

  test('Should UPDATE pokemon', async () => {
    let response = await request.patch('/api/pokemon/1').send({
      name: 'Bulbasaur'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Bulbasaur');
  });

  test('Should DELETE pokemon', async () => {
    let response = await request.delete('/api/pokemon/1');

    expect(response.status).toEqual(204);
  });

})