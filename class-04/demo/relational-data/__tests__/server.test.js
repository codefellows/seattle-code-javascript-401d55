const supertest = require('supertest');
const { app } = require('../lib/server.js');
const { sequelize } = require('../lib/models');
const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
})
afterAll(async () => {
  await sequelize.drop();
})

describe('Testing our server router!', () => {
  test('Should POST from /customers', async () => {
    let response = await request.post('/api/customer').send({
      name: 'TEST',
      phoneNum: 1234567,
      email: 'TEST'
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('TEST');
  });

  test('Should GET from /customers', async () => {
    let response = await request.get('/api/customer');
  
    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(1);
  });

  test('Should PUT from /customers/:id', async () => {
    let response = await request.put('/api/customer/' + 1).send({
      name: 'TESTERSON',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('TESTERSON');
    expect(response.body.phoneNum).toEqual(1234567);
  });

  test('Should DELETE from /customers/:id', async () => {
    let response = await request.delete('/api/customer/' + 1);

    expect(response.status).toEqual(200);
    console.log("RESPONSE BODY", response.body);
    expect(response.body).toEqual({result: 'deleted'});
  });

  test('Make Sure customer id gone', async () => {
    let response = await request.get('/api/customer');

    expect(response.status).toEqual(200);
    expect(response.body.results.length).toEqual(0);
  });
});



