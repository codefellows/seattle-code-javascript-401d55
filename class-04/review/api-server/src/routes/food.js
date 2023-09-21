'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

// GET all food
router.get('/food', async (req, res) => {
  let records = await FoodModel.findAll();
  res.status(200).send({ results: records });
});

// GET a food
router.get('/food/:id', async (req, res) => {
  let id = req.params.id;
  let records = await FoodModel.findByPk(id);
  res.status(200).send({ results: records });
});

// CREATE a food
router.post('/food', async (req, res) => {
  let record = await FoodModel.create(req.body);
  res.status(200).json(record);
});

// UPDATE a food
router.patch('/food/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await FoodModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  res.status(200).json(recordToUpdate);
});

// DELETE a food
router.delete('/food/:id', async (req, res) => {
  let id = req.params.id;
  await FoodModel.destroy({ where: { id } });
  res.status(204).send('deleted');
});

module.exports = router;
