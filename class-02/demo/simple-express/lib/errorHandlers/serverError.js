'use strict';

const serverError = (err, req, res, next) => {
  console.log("AN ERROR OCCURRED!", err);
  res.status(err.code).json({ message: err.message });
};

module.exports = serverError;
