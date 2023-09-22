'use strict';

const supertest = require('supertest');
const server = require('../lib/server.js');
const { sequelize, PersonModel } = require('../lib/models');
const request = supertest(server.app);

let testPerson;

beforeAll(async () => {
  await sequelize.sync();
  testPerson = await PersonModel.create({ name: 'test', age: 100 });
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the REST Router', () => {
  /* NEED TO WORK ON */
  test('Should READ pet', async () => {
    let response = await request.get('/api/pet');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE pet', async () => {
    let response = await request.post('/api/pet').send({
      name: 'Koko',
      personId: testPerson.id,
    }); 
    console.log('THIS IS OUR RESPONSE BODY:', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Koko');
    expect(response.body.personId).toEqual(1);
  });

  test('Should UPDATE pet', async () => {
    let response = await request.put('/api/pet/1').send({
      name: 'Jojo',
      personId: 2,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Jojo');
    expect(response.body.personId).toEqual(2);
  });

  test('Should DELETE pet', async () => {
    let response = await request.delete('/api/pet');

    expect(response.status).toEqual(200);
  });
});

describe('Testing the REST Router', () => {
  test('Will this return a 404 error - bad path', async () => {
    let response = await request.get('/api/notAnEndpoint');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Error 404 - Incorrect Path');
  });

  test('Will this return a 404 error - bad method', async () => {
    let response = await request.patch('/api/person');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Error 404 - Incorrect Method');
  });

  test('Should READ person', async () => {
    let response = await request.get('/api/person');

    expect(response.status).toEqual(200);
    expect(response.body.results).toBeTruthy();
  });

  test('Should CREATE person', async () => {
    let response = await request.post('/api/person').send({
      name: 'Chester',
      age: 100,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chester');
    expect(response.body.age).toEqual(100);
  });

  test('Should UPDATE person', async () => {
    let response = await request.put('/api/person/1').send({
      name: 'Toyota',
      age: 50,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Toyota');
    expect(response.body.age).toEqual(50);
  });

  test('Should DELETE person', async () => {
    let response = await request.delete('/api/person/1');

    expect(response.status).toEqual(200);
  });
});
