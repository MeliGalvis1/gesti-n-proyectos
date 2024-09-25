const express = require('express');
const router = express.Router();
const Miembro = require('../models/Miembro');

router.get('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const miembros = await Miembro.find();
  res.json(miembros);
});

router.post('/', async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const miembro = new Miembro(req.body);
  await miembro.save();
  res.json(miembro);
});

module.exports = router;