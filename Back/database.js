const mongoose = require('mongoose');
console.log("base de datos");

mongoose.connect('mongodb://localhost/gestion-proyectos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error de conexión:'));
db.once('open', function() {
  console.log('Conectado a la base de datos');
});