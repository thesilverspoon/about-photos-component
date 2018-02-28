const express = require('express');

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.sendStatus(200);
});

module.exports = router;