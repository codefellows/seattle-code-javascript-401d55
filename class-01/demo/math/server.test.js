const supertest = require('supertest');
const app = require('./server.js');
const request = supertest(app);

describe('Testing the server module', () => {

  test('Should return a sum as a response', async () => {
    let response = await request.get('/sum?value1=8&value2=4');
  
    expect(response.status).toEqual(200);
    expect(response.body.results).toEqual(12);
  });
});