var express = require('express');
var router = express.Router();
const pool = require('../database'); // connection to db


router.get('/', function(req, res, next) {
  res.send("este es el home");
});

module.exports = router;
