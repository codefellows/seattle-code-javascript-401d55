'use strict';

const { handler } = require('./index.js');

describe('Testing create lambda', () => {
  test('Should return a new pokemon', async () => {
    let response = await handler({
      body: JSON.stringify({
        id: 2,
        Name: 'test',
        type: 'test',
        rarity: 'test'
      })
    });

    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body).Name).toEqual('test');
  });
})