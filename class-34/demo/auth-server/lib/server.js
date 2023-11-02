'use strict';

const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/auth.js');
const articleRouter = require('./routes/articles.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authRouter);
app.use(articleRouter);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('App is listening on PORT : ' + port));
  }
}