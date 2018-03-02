const express = require('express');
const db = require('../db/database.js');

const router = express.Router();

router.get('/:id', (req, res) => {
  console.log('here');
  console.log(req.params, 'serverrrrr');
  db.find(req.params, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  })
});

module.exports = router;
