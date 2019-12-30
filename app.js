/* eslint-disable linebreak-style */
require('dotenv').config();
const express = require('express');
const logger = require('./logger');

const app = express();

app.listen(process.env.PORT, 'localhost', () => {
  logger.log('server listening on ', process.env.PORT);
});
