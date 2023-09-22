'use strict';

// Checks to make sure request method is correct
function methodValidator(request, response, next) {
  if (
    request.method === 'GET' ||
    request.method === 'POST' ||
    request.method === 'PUT' ||
    request.method === 'DELETE'
  ) {
    next();
  } else {
    next({ method: 'Error 404 - Incorrect Method' });
  }
}
module.exports = methodValidator;