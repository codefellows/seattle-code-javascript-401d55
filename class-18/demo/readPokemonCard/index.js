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
const pokemonModel = dynamoose.model('pokemon-cards', pokemonCardSchema); // the first argument shuold match the table name on dynamoDB.

exports.handler = async (event) => {
  console.log('HERE IS THE EVENT OBJECT', event);
  // TODO implement
  console.log('HERE are the path parameters', event.pathParameters);

  // pokemonModel.query('Name').contains('pikachu').exec()

  let results = await pokemonModel.scan().exec();
  // sending back a list of pokemon from our DB

  const response = {
    statusCode: 200,
    body: JSON.stringify(results),
  };
  return response;
};