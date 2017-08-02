'use strict';

const express = require('express')
const volleyball = require('volleyball');
const path = require('path');

const app = express();

app.use(volleyball);

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/', express.static(__dirname + '/public'));

app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
});

const port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port...', port);
});
