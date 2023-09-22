'use strict';

const express = require('express');
const { PersonModel } = require('../models');

const router = express.Router();

router.get('/person', handleGet);
router.post('/person', handlePost);
router.put('/person/:id', handlePut);
router.delete('/person/:id', handleDelete);

async function handleGet(request, response) {
  let records = await PersonModel.read();
  response.status(200).json({ results: records });
};

async function handlePost(request, response) {
  let record = await PersonModel.create(request.body);
  response.status(200).json(record);
};

async function handlePut(request, response) {
  let record = await PersonModel.update(request.params.id, request.body);
  response.status(200).json(record);
};

async function handleDelete(request, response) {
  let result = await PersonModel.delete(request.params.id);
  response.status(200).json({ result });
};

module.exports = router;
