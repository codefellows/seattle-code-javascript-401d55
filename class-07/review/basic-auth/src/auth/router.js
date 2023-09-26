'use strict';

const bcrypt = require('bcrypt');

const { userModel } = require('./models/index');

async function handleSignup(req, res, next) {
  try {
    const record = await userModel.create(req.body);
    res.status(201).json(record);
  } catch (e) { res.status(403).send('Error Creating User'); }
}

async function handleSignin(req, res, next) {
  // console.log('router.js: Signing IN', req.path);
  // console.log(req.username, req.password)

  try {
    const user = await userModel.findOne({ where: { username: req.username } });
    const valid = await bcrypt.compare(req.password, user.password);
    if (valid) {
      res.status(200).json(user);
    }
    else {
      throw new Error('Invalid User');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }

}

module.exports = {
  handleSignup,
  handleSignin,
}
