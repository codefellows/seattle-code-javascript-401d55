'use strict';

// Checks to make sure request.path includes correct endpoints
function pathValidator(req, res, next) {
  if (
    req.path === '/signup' ||
    req.path === '/signin'
    ){
    // console.log('pathValidator: ', req.path)
    next();
  } else {
    next({ path: 'Error 404 - Incorrect Path' });
  }
}

module.exports = pathValidator;
