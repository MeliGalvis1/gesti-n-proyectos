const express = require('express');
const router = express.Router();
const Tarea = require('../models/Tarea');

router.get('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const tareas = await Tarea.find();
  res.json(tareas);
});

router.post('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const tarea = new Tarea(req.body);
  await tarea.save();
  res.json(tarea);
});

module.exports = router;