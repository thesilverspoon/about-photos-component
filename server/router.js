const express = require('express');
const db = require('../db/database.js');

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.params);
  db.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data[0]);
      res.json(data[0]);
    }
  })
});

module.exports = router;
