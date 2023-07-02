var AASS = require('../apple-app-site-association.json');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(AASS);
});

module.exports = router;
