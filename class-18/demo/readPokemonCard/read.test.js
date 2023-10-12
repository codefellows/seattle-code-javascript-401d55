'use strict';

const { handler } = require('./index.js');

describe('Testing the readPokemonCard lambda', () => {
  test('Should return a list of pokemon', async () => {
    let response = await handler({pathParameters: {}});
    expect(response.statusCode).toEqual(200);
    let responseBody = JSON.parse(response.body);
    expect(responseBody[0].Name).toBeTruthy();
  });

  test('Should return a single pokemon', async () => {
    let response = await handler({pathParameters: {id:'1'}});

    expect(response.statusCode).toEqual(200);
    let responseBody = JSON.parse(response.body);
    console.log(response);
    expect(responseBody.Name).toBeTruthy();
  });
});
