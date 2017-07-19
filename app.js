'use strict';

const express = require('express')
const router = express.Router();
const volleyball = require
const path = require('path');

const app = express();

app.use(require('morgan')('default'));

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '/scripts')));

app.use((err, req, res, next) => {
  console.error(err, err.stack);
  res.status(err.status || 500);
});


const port = 3000;
app.listen(port, function () {
  console.log('Server is listening on port...', port);
});
