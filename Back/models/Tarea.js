const mongoose = require('mongoose');
console.log("Modelo Tareas");

const tareaSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  proyecto: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' }
});

const Tarea = mongoose.model('tareas', tareaSchema);

module.exports = Tarea;