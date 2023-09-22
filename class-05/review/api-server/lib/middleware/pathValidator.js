'use strict';

// Checks to make sure request.path includes correct endpoints
function pathValidator(request, response, next) {
  if (request.path.includes('/api/person')) {
    next();
  } else if (request.path.includes('/api/pet')) {
    next();
  } else {
    next({ path: 'Error 404 - Incorrect Path' });
  }
}

module.exports = pathValidator;
