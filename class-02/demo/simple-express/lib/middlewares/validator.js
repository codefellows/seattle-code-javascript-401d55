'use strict';

const validator = (req, res, next) => {
  let value1 = req.query.value1;
  if (!value1) {
    next({code: 500, message: 'NO VALUE GIVEN' }); // any error that you want to throw is passed as an argument into the next function.
  } else {
    next();
  }
}

module.exports = validator;
