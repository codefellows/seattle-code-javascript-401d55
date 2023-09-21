'use strict';

const notFoundHandler = (req, res, next) => {
  res.status(404).send({ message: 'Not Found' });
};

module.exports = notFoundHandler;
