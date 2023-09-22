'use strict';

// Parses error depending if its a path or method error
function error404(error, request, response, next) {
  if (error.path) {
    response.status(404).send({ message: error.path});
  } else {
    response.status(404).send({ message: error.method });
  }
}

module.exports = error404;
