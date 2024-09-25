const mongoose = require('mongoose');

const miembroSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo: String,
  proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' }
});

const Miembro = mongoose.model('Miembro', miembroSchema);

module.exports = Miembro;