'use strict';

const { UserModel } = require('../models');

async function bearerAuth(req, res, next) {
  if (!req.headers.authorization) {
    next('Invalid Login');
    return;
  }

  let token = req.headers.authorization.split(' ')[1];
  let userRecord = await UserModel.authenticateToken(token);
  if (userRecord) {
    req.user = userRecord;
    next();
  } else {
    next('Invalid token');
  }
}

module.exports = bearerAuth;
