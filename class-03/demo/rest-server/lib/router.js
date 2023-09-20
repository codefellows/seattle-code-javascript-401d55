'use strict';

const express = require('express');
const { PokemonModel } = require('./models');

const router = express.Router(); // this can be attached to an app with specific routes

router.get('/pokemon', async (req, res) => {

  let records = await PokemonModel.findAll();
  res.status(200).send({ results: records });
});

router.post('/pokemon', async (req, res) => {
  let record = await PokemonModel.create(req.body);
  res.status(200).json(record);
});

router.patch('/pokemon/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await PokemonModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  // let updatedRecord = await PokemonModel.update(req.body, {
  //   where: { id },
  // });
  console.log('UPDATED RECORD', recordToUpdate);
  res.status(200).json(recordToUpdate);
}); // route parameter => required value attached to the URI

router.delete('/pokemon/:id', async (req, res) => {
  let id = req.params.id;
  // let record = await PokemonModel.findByPk(id);
  await PokemonModel.destroy({
    where: { id }
  });

  res.status(204).send('deleted');
});

module.exports = router;