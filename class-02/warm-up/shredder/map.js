'use strict';

// class Shredder {
//   map () {

//   }
// }

// const $$ = new Shredder();

const $$ = {
  map: function (structure, callback) {

    // datatype is an array!!
    if (Array.isArray(structure)) {
      let result = [];
      structure.forEach((item, idx) => {
        result.push(callback(item, idx));
      });
      return result;
    } else {
      // do object stuff.
      let result = {};

      // for loop for objects??
      let keys = Object.keys(structure); // [hot, sunny]
      keys.forEach(key => {
        let value = structure[key];
        result[key] = callback(key, value);
      });
      return result;
    }
  }
}

// test case 1
let array = [1, 2, 3, 4];
let test1 = $$.map(array, (val, idx) => {
  return val * val;
});

console.log(test1); // [1,4,9,16]

// test case 2
let obj = {
  hot: "yes",
  sunny: "no",
};
let test2 = $$.map(obj, (key, val) => {
  return val.toUpperCase();
});

console.log(test2); // { hot: "YES", sunny: "NO" }