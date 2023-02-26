const express = require('express');
const app = express();
const User = require('../entity/Users');
const router = express.Router();
const db = require('../models/db');

/* GET home page. */
router.get('/', function (req, res, next) {
  db.getAllMemos((rows) => {
    res.render('index', { rows: rows });
  });
});

module.exports = router;
