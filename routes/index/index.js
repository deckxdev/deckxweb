var express = require('express');
const path = require('path');

var router = express.Router();

router.use(express.static("index"))

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname,'index.html'))
//   //res.render('index', { title: 'Express' });
// });

module.exports = router;
