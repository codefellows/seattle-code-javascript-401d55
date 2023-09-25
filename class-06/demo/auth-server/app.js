'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

// instantiate our server and our DB connection
const PORT = process.env.PORT || 3001;
const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory:';

const app = express();
const sequelize = new Sequelize(SQL_CONNECTION_STRING); // connect to db

//  setup the server
app.use(cors());
app.use(express.json()); // json
app.use(express.urlencoded({ extended: true })) ;// form data

// create the user Model / Table
const User = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// route for registering a new user.
app.post('/signup', async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  let encryptedPassword = await bcrypt.hash(password, 10);

  let user = await User.create({
    username,
    password: encryptedPassword
  });
  console.log('NEWLY CREATED USER!!', user);

  res.status(201).send(user);
});

// let basicAuth = (req, res, next) => {
//   // when do you call next?
//   // is there anything you want to attach to the request?
// }

app.post('/signin',  async (req, res, next) => {

  try {

    // step1 - look at authorization header
    let encodedCredentials = req.headers.authorization; // Basic asdjfasyfyasg
    let encodedbase64 = encodedCredentials.split(' ')[1] // asdjfasyfyasg
    let decoded = base64.decode(encodedbase64); // username:password
    let [username, password] = decoded.split(':'); // [username, password];

    //step2 - look for user based on username
    let userRecord = await User.findOne({ where: { username }});

    // step3 - compare passwords
    let isValid = await bcrypt.compare(password, userRecord.password);
    if (isValid) {
      res.status(200).send('You made it!');
    } else {
      throw new Error('Invalid credentials');
    }

  } catch (e) {
    console.log('Basic auth error:', e);
    next('Unauthenticated');
  }

});

// Sequelize needs tables to be created before we make any DB operations.
// sync ensures that tables are created if none exists.
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('App is listening!');
  });
});
