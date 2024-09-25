const express = require('express');
const app = express();
const mongoose = require('mongoose');
const proyectosRouter = require('./routes/proyectos');
const tareasRouter = require('./routes/tareas');
const miembrosRouter = require('./routes/miembros');


// Conectar a la base de datos
mongoose.connect('mongodb://localhost/proyecto-gestion-proyectos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error de conexión:'));
db.once('open', function() {
  console.log('Conectado a la base de datos');
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use('/proyectos', proyectosRouter);
app.use('/tareas', tareasRouter);
app.use('/miembros', miembrosRouter);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});