'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const person = require('./person.js');
const pet = require('./pet.js');
const Collection = require('./collection.js');

const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_CONNECTION_STRING, { logging: false});
const PersonModel = person(sequelize, DataTypes);
const PetModel = pet(sequelize, DataTypes);

// This creates the association between the models
PetModel.belongsTo(PersonModel, { foreignKey: 'personId', targetKey: 'id' });
PersonModel.hasMany(PetModel, { foreignKey: 'personId', sourceKey: 'id' });

module.exports = {
  sequelize,
  PersonModel: new Collection(PersonModel),
  PetModel: new Collection(PetModel),
};
