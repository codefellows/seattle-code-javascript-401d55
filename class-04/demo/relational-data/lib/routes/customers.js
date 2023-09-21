'use strict';

const express = require('express');
const router = express.Router();
const { CustomerTable } = require('../models');

router.get('/customer', handleGet);
router.post('/customer', handlePost);
router.put('/customer/:id', handlePut);
router.delete('/customer/:id', handleDelete);


async function handleGet(req, res) {
  let records = await CustomerTable.read();
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await CustomerTable.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await CustomerTable.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await CustomerTable.delete(req.params.id);
  console.log('RESULTS FROM COLLECTION DELETE:', req.params.id, result);
  res.status(200).json({ result });
}

module.exports = router;
