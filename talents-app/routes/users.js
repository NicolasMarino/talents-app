var express = require('express');
var router = express.Router();
const pool = require('../database'); // connection to db

router.get('/', function(req, res, next) {
  pool.query("select * from users", function(err,data){
    (err)?res.send(err):res.json({users: data});
  });  
});

module.exports = router;
