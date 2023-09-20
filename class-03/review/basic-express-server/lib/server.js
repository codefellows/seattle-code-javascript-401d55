const express = require('express');
const app = express();
const cors = require('cors')


const logger = require('../lib/middleware/logger.js');
const validator = require('../lib/middleware/validator.js');
const notFoundHandler = require('../lib/error-handlers/404.js')
const serverErrorHandler = require('../lib/error-handlers/500.js');


app.use(logger);
app.use(cors());

app.get('/person', validator ,(req, res) => {
  const name = req.query.name;
  res.json({ name: name });
});

app.use(notFoundHandler);
app.use(serverErrorHandler);
app.use('/*', (req, res) => {
  res.send('Recheck your URL and Try again!')
});

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  },
  app,
};
