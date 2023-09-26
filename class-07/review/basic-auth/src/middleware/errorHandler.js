'use strict';

const error404 = require('./404.js')
const error500 = require('./500.js')

const errorHandler = (err, req, res, next) => {
  // console.log('errorHandler: ', err);
  if (err.path || err.method) {
    error404(err, req, res, next);
  } else {
    error500(err, req, res, next)
  }

  // let code = err.code;
  // res.status(code).json({ message: err.message });
};

module.exports = errorHandler;
