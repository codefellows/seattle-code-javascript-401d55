'use strict'
// Sends a 500/Server Error message as the response
// Import this into your server and set it up to be “used” as the last route

// function serverErrorHandler(err, req, res, next) {
//   console.error(err);
//   res.status(500).send('Server Error');
// }

// module.exports = serverErrorHandler;

'use strict';

function serverError(err, req, res, next) {
  // console.log("500.js: AN ERROR OCCURRED!", err);
  console.log ('Server Error', err);
  res.status(500).send({ message: err });
};


module.exports = serverError;
