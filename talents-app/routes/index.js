var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("este es el home");
});

module.exports = router;
