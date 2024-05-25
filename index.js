// Importar dependencias necesarias
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configurar variables de entorno
dotenv.config();

// Crear una instancia de Express
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Importar rutas
const userRoute = require('./routes/user');


// Usar rutas
app.use('/api/users', userRoute);


// Configurar el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
