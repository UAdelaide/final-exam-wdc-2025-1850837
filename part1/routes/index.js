var express = require('express');
const { path } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  console.log(__direname);
  res.sendFile(path.join(__dirname, 'part1/views/index.html'));
});

module.exports = router;
