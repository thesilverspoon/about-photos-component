const path = require('path');
const express = require('express');
const router = require('./router.js');

const app = express();

app.use('/restaurants/:id', express.static(path.join(__dirname, '../client')));

app.use('/restaurants', router);

module.exports = app;
