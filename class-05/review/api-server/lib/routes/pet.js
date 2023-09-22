'use strict';

const express = require('express');
const { PetModel } = require('../models');

const router = express.Router();

router.get('/pet', handleGet);
router.post('/pet', handlePost);
router.put('/pet/:id', handlePut);
router.delete('/pet/:id', handleDelete);

async function handleGet(request, response) {
  let records = await PetModel.read();
  response.status(200).json({ results: records });
};

async function handlePost(request, response) {
  try {
    let record = await PetModel.create(request.body);
    response.status(200).json(record);
  } catch (e) {
    console.error(e);
  }
};

async function handlePut(request, response) {
  let record = await PetModel.update(request.params.id, request.body);
  response.status(200).json(record);
};

async function handleDelete(request, response) {
  let result = await PetModel.delete(request.params.id);
  response.status(200).json({ result });
};

module.exports = router;
