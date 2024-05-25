const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

// Configuración de MongoDB y rutas, similar a index.js

module.exports = app;
/* AUTORES:
Santiago Rodríguez Hernández: Ficha 2626999
Esteban Bernardo Garay Soto: Ficha 2626997
Edwin Guzmán Molina: Ficha 2626996
Adrián Moreno Lozano: Ficha 2626999
 */