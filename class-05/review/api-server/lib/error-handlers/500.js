'use strict';

function error500(error, request, response, next) {
  console.log('ERROR MESSAGE: ' + error.message);
  response.status(500).send({ message: 'Server Error' });
}

module.exports = error500;
