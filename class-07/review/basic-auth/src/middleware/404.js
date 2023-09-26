'use strict';

function error404(err, req, res, next) {
  if (err.path) {
    res.status(404).send({ message: err.path});
  } else {
    res.status(404).send({ message: err.method });
  }
}

module.exports = error404;