'use strict';

const express = require('express');
const bearer = require('../middlewares/bearer.js');
const acl = require('../middlewares/acl.js');
const { ArticleModel } = require('../models');
const router = express.Router();

router.get('/article', bearer, acl('read'), async (req, res, next) => {
  try {
    let articles = await ArticleModel.findAll({});
    res.status(200).json(articles);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.get('/article/:id', bearer, acl('read'), async (req, res, next) => {
  try {
    let article = await ArticleModel.findOne({ where: { id: req.params.id }});
    res.status(200).json(article);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.post('/article', bearer, acl('create'), async (req, res, next) => {
  try {
    let article = await ArticleModel.create(req.body);
    res.status(201).json(article);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
router.put('/article/:id', bearer, acl('update'), async (req, res, next) => {
  try {
    let article = await ArticleModel.findOne({ where: {id: req.params.id }});
    await article.update(req.body);
    res.status(200).json(article);
  } catch(e) {
    next(e);
  }
});
router.delete('/article/:id', bearer, acl('delete'), async (req, res, next) => {
  try {
    await ArticleModel.destroy({ where: {id: req.params.id }});
    res.sendStatus(204);
  } catch(e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;