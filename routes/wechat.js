var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(req.query.echostr);
  console.log('return echostr=' + req.query.echostr);
  next();
});

router.post('/', function(req, res, next){
	var raw = '';
	req.on('data', function(data){
		console.log('router middleware:post, receiving data...');
		raw += data;
	});

	req.on('end', function(){
		console.log('router middleware:post, reading data complete.');
		console.log('content is ' + raw.toString());
	});
	req.on('error', function(e){
		console.log('got error message:' + e.message);
	});
	// console.log('received message from ' + name.toString());
	res.send(req.query.echostr);
	next();
});
module.exports = router;
