// routes/user.js
const router = require('express').Router();
const User = require('../models/User');

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json("Usuario agregado existosamente" );
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json('Usuario no encontrado');
    }

    if (user.password !== req.body.password) {
      return res.status(400).json('Contraseña incorrecta');
    }

    res.status(200).json("usuario logueado exitosamente");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ruta para obtener un usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json('Usuario no encontrado');
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ruta para actualizar un usuario
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json("Usuario actualizado exitosamente");
  } catch (err) {
    res.status(500).json(err);
  }
});

// Ruta para eliminar un usuario
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('Usuario eliminado');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
