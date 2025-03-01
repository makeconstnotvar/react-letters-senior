const express = require('express');
const path = require('path');

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'It works!' });
});

module.exports = app;