var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "views")));
app.listen(8080);

module.exports = router;
