'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

class Garage {
  constructor() {
    this.bikes = [];
  }

  add(bike) {
    this.bikes.push(bike);
  }
}

class Bike {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const app = express();
const garage = new Garage();

app.use(cors());

app.get('/bikes', (req, res) => {
  try {
    res.status(200).json(bikes);
  } catch(e) {
    console.log('server error', e);
    next(e);
  }
});

app.post('/bikes', (req, res) => {
  try {
    const bike = new Bike(req.body);
    garage.add(bike);
    res.status(201).json(bike);
  } catch(e) {
    console.log('server error', e);
    next(e);
  }
});

app.listen(PORT, () => {
  console.log('CF Web Services running!');
});
