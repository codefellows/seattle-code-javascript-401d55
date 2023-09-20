'use strict'
// Checks the query string for a name property
// Sends the request through when valid, forces an error when not

function validator(req, res, next){
  const name = req.query.name;
 
  
  if (req.path !== "/person") {
    next('Bad Route!');
  } else if (!name) {
    next('ERROR: No Name Provided!');
  } else {
    next();
  }  
}
module.exports = validator;
