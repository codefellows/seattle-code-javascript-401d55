'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');

const user = require('../models/index.js')

async function basicAuth(req, res, next) {
  if (req.path === '/signup') {
    if (req.body.password) {req.body.password = await bcrypt.hash(req.body.password, 10);}
    next();
  } else if (req.path === '/signin') {
    console.log('basic.js: signin', req.body)
    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'am9objpmb28=']
    let encodedString = basicHeaderParts.pop();  // am9objpmb28=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password
    req.username = username;
    req.password = password

    next();
  } else {
    next('Incorrect path chosen')
  }

}

module.exports = basicAuth;