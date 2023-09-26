'use strict';

// Checks to make sure request method is correct
function methodValidator(req, res, next) {
  if (req.method === 'POST') {
    next();
  } else {
    next({ method: 'Error 404 - Incorrect Method' });
  }
}

module.exports = methodValidator;
