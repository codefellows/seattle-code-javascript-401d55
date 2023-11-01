'use strict';

// 2 fat arrows = function currying
const acl = (capability) => (req, res, next) => {
  try {
    if (req.user.capabilities.includes(capability)) {
      next();
    } else {
      next('Access Denied');
      // res.status(403).send('Access Denied');
    }
  } catch(e) {
    console.log('ERROR IN ACL MIDDLEWARE:', e);
    next('Access Denied');
  }
}


// function sum1(a, b) {
//   return a + b;
// }

// function sum2(a) {
//   function innerSum(b) {
//     return a + b;
//   }

//   return innerSum;
// }

// sum1(1, 2);
// let innerSum = sum2(1);

// innerSum(2);
// function curry(param1) {
//   return function(param2) {
//     return param1 + param2;
//   }
// }

// let secondCurry = curry(1);

// let sum = secondCurry(2);

module.exports = acl;
