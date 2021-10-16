const express = require('express');

const calcRouter = express.Router();

calcRouter.post('/check', (req, res) => {
  const { numberA, numberB } = req.body;

  const divider = numberA % numberB === 0;
  res.json({ divider });

  // res.json({ ok: 'Json is working' });
});

module.exports = {
  calcRouter,
};
