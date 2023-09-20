'use strict';

const $$ = {
  filter: function(objOrArr, callback) {
    // solution for arrays
    if (Array.isArray(objOrArr)) {
      let newArr = []
      // for (let i = 0; i < objOrArr.length; i++) {
      objOrArr.forEach((value, index) => {
        // let index = i;
        // let value = objOrArr[i];
        let callbackResult = callback(value, index);
        if (callbackResult === true) {
          newArr.push(value);
        }
      });
      // }
      return newArr;
    } else {
      // Object.keys(objOrArr)
    }
  }
}

let array = [1, 2, 3, 4];
let test1 = $$.filter(array, (val, idx) => {
  return !(value % 2)
});

console.log("TEST 1 RESULT:", test1); // [2,4]
