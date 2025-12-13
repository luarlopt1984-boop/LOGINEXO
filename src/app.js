const express = require('express');
const app = express();

// Middleware básico
app.use(express.json());
app.use(express.static('public'));

// Rutas
const routes = require('./routes/index');
app.use('/', routes);

module.exports = app;
