'use strict';

function notFoundHandler(req, res, next) {
  console.log ('Not Found - 404 error');
  res.status(404).send({ message: 'Not Found' });
};

module.exports = notFoundHandler;
