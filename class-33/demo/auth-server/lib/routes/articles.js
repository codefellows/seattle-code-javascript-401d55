'use strict';

const express = require('express');
const bearer = require('../middlewares/bearer.js');
const acl = require('../middlewares/acl.js');
const router = express.Router();

router.get('/article', bearer, acl('read'), (req, res) => {
  res.status(200).send('YOU CAN READ!');
});
router.post('/article', bearer, acl('create'), (req, res) => {
  res.status(200).send('YOU CAN CREATE!');
});
router.put('/article', bearer, acl('update'), (req, res) => { 
  res.status(200).send('YOU CAN UPDATE!');
});
router.delete('/article', bearer, acl('delete'), (req, res) => { 
  res.status(200).send('YOU CAN DELETE!');
});

module.exports = router;