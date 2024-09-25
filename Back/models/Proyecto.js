const mongoose = require('mongoose');
console.log("Modelo Proyecto");

const proyectoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  fechaInicio: Date,
  fechaFin: Date,
  tareas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tarea' }],
  miembros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Miembro' }]
});

const Proyecto = mongoose.model('proyectos', proyectoSchema);

module.exports = Proyecto;