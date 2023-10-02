'use strict';

// subscriber!
function handleTemperature(payload) {

  let output = 'Current temperature: ' + payload.temperature;

  if (payload.temperature > 70) {
    output += ' *** Taking off clothing layer! ***';
  } else if (payload.temperature < 30) {
    output += ' *** Putting on clothing layer ***';
  } else {
    output += ' *** I feel great ***';
  }

  console.log(output);
}

module.exports = handleTemperature;