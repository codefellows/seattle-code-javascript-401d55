'use strict';

const { sequelize, PersonModel, PetModel } = require('../lib/models');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

xdescribe('Testing the Model Associations', () => {
  let person;
  let pet;

  test('Should be able to create a Person with and Order', async () => {
    person = await PersonModel.create({
      name: 'Jojo',
      age: 3,
    });
    pet = await PetModel.create({
      name: 'Koko',
      personId: person.id
    });

    expect(person.name).toEqual('Jojo');
    expect(pet.name).toEqual('Koko');
    expect(person.age).toEqual(3);
    expect(pet.personId).toEqual(person.id);
  });

  test('Should be able to fetch a person and include all orders', async () => {
    person = await PersonModel.read(person.id, {
      include: PetModel.model,
    });

    expect(person.name).toEqual('Jojo');
    console.log('Here at pet:', person.Pets[0]);
    expect(person.Pets[0].name).toEqual('Koko');
  });
});
