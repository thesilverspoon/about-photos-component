const express = require('express');
const db = require('../db/database.js');

const router = express.Router();

router.get('/:id', (req, res) => {
  req.params.id = parseInt(req.params.id);

  db.find(req.params, (err, data) => {
    if (err) {
    } else {
      res.sendStatus(200);
    }
  })
});

module.exports = router;
