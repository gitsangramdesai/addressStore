var express = require('express');
var router = express.Router();
require('dotenv').config();
var pool = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM countryList')
    .then(([rows, fields]) => {
      res.json(
      {
        message: 'Countries fetched successfully',
        metadata:"countries",
        data: rows 
      });
    })
    .catch((error) => {
      console.error('Error fetching users:', error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
