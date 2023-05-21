var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var values=["adit","ajay","arjun s"]
  res.render('index', {values});
});

module.exports = router;
