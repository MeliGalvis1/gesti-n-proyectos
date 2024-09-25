const express = require('express');
const router = express.Router();
const Proyecto = require('../models/Proyecto');

router.get('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const proyectos = await Proyecto.find();
  res.json(proyectos);
});

router.post('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const proyecto = new Proyecto(req.body);
  await proyecto.save();
  res.json(proyecto);
});

module.exports = router;