const express = require('express');

const calcRouter = express.Router();

calcRouter.post('/check', (req, res) => {
  const { numberA, numberB } = req.body;

  console.log(numberA, numberB);

  res.json({ ok: 'Json is working' });
});

module.exports = {
  calcRouter,
};
