'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// middleware runs across the entire application
app.use((req, res, next) => {
  console.log('REQUEST METHOD: ' + req.method);
  console.log('REQUEST PATH: ' + req.path);
  console.log('REQUEST QUERY:', req.query);
  // req.banana = 'Jacobs favorite fruit!';
  next(); // pass the request to another middleware
});

// validator function
app.use((req, res, next) => {
  let value1 = req.query.value1;
  if (!value1) {
    next('NO VALUE GIVEN'); // any error that you want to throw is passed as an argument into the next function.
  } else {
    next();
  }
});

// middleware only runs for requests with a method GET and path /sum.
app.get('/sum', (req, res, next) => {
  res.send('Summing values');
});

// this is an error handler because 4 params
app.use((err, req, res, next) => {
  console.log("AN ERROR OCCURRED!", err);
  res.status(500).json({ message: 'Server is broken' });
});


module.exports = app;