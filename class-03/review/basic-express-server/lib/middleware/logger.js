//Performs a console.log with the request method and path
// Import this into your server and set it up to run at the application level for all routes

'use strict'
function logger(req, res, next){
  console.log('REQUEST METHOD: ' + req.method);
  console.log('REQUEST PATH: ' + req.path);
  next();
};

module.exports = logger;
