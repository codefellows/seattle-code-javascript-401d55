'use strict';

const { handler } = require('./index.js');

describe('Testing the readPokemonCard lambda', () => {
  test('Should return a list of pokemon', async () => {
    let response = await handler({});
    console.log(response);
    expect(response.statusCode).toEqual(200);
    let responseBody = JSON.parse(response.body);
    console.log(responseBody);
    expect(responseBody[0].Name).toBeTruthy();
  });
})