'use strict';

const logger = (req, res, next) => {
  console.log('REQUEST METHOD: ' + req.method);
  console.log('REQUEST PATH: ' + req.path);
  console.log('REQUEST QUERY:', req.query);
  next();
}

module.exports = logger;
