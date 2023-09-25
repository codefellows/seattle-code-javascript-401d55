'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');

// base64 Encoding??

// only certain characters are valid base 64 characters.

let encoded = base64.encode('Jacob is awesome');
console.log('ENCODED STRING:', encoded);

let decoded = base64.decode(encoded);
console.log('DECODED STRING:', decoded);

// how we will encode credentials

let username = 'jacob';
let password = 'supersecretsquirrel';

let unencoded = `${username}:${password}`;
console.log('OUR CREDENTIALS: ', unencoded);

let encodedCredentials = base64.encode(unencoded);
console.log('READY TO SEND: ', encodedCredentials);

// we need to hide our credentials using bcrypt

// We are using 1-way encryption.

bcrypt.hash(password, 10).then(encryptedString => {
  console.log('HERE IS OUR UN_ENCRYPTED PASSWORD', password);
  console.log('HERE IS OUR ENCRYPTED PASSWORD', encryptedString);

  // how can we tell that credentials are valid.

  // we do this by comparison
  bcrypt.compare('supersecretsquirrel', encryptedString).then(isValid => {
    console.log('IS THIS THE SAME STRING', isValid);
  });
});