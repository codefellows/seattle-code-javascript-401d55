'use strict';

const dynamoose = require('dynamoose');

// define our schema
const pokemonCardSchema = new dynamoose.Schema({
  id: Number,
  Name: String,
  type: String,
  rarity: String,
});

// create our 'Model'
const pokemonModel = dynamoose.model('pokemon-cards', pokemonCardSchema); // the first argument should match the table name on dynamoDB.

exports.handler = async (event) => {
  console.log('HERE IS THE EVENT OBJECT', event);
  // TODO implement
  console.log('HERE are the path parameters', event.pathParameters);
  let results = null;
  let response = {
    statusCode: 500,
    body: JSON.stringify('SERVER ERROR'),
  }

  try {
    if (event.pathParameters && event.pathParameters.id) {
      let list = await pokemonModel.query('id').eq(parseInt(event.pathParameters.id)).exec();
      results = list[0];
    } else {
      results = await pokemonModel.scan().exec();
    }
    response.body = JSON.stringify(results);
    response.statusCode = 200;
  } catch(e) {
    results.body = JSON.stringify(e);
  }

  return response;
};