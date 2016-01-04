var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/samplelist', function(req, res, next){
  res.render('samplelist');
		});


module.exports = router;
