'use strict';

const express = require('express');
const { ClothesModel } = require('../models');

const router = express.Router();

// GET all clothes
router.get('/clothes', async (req, res) => {
  let records = await ClothesModel.findAll();
  res.status(200).send({ results: records });
});

// GET a clothes
router.get('/clothes/:id', async (req, res) => {
  let id = req.params.id;
  let records = await ClothesModel.findByPk(id);
  res.status(200).send({ results: records });
});

// CREATE a clothes
router.post('/clothes', async (req, res) => {
  let record = await ClothesModel.create(req.body);
  res.status(200).json(record);
});

// UPDATE a clothes
router.patch('/clothes/:id', async (req, res) => {
  let id = req.params.id;
  let recordToUpdate = await ClothesModel.findByPk(id);
  recordToUpdate.update(req.body);
  await recordToUpdate.save();
  res.status(200).json(recordToUpdate);
});

// DELETE a clothes
router.delete('/clothes/:id', async (req, res) => {
  let id = req.params.id;
  await ClothesModel.destroy({ where: { id } });
  res.status(204).send('delted');
});

module.exports = router;
