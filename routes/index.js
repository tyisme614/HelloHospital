var express = require('express');
var router = express.Router();
var target;
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

// router.param('target', function(req, res, next, value){
// 	console.log('received parameter:' + value);
// 	target = value;
// 	next();
// });

router.get('/index', function(req, res, next) {
	target = req.query.target;//req.param('target');
	console.log(target);
	if(!target){
		console.log('not defined');
		res.render('index', {
  		target:'videos'
  		});
	}
	if(target === 'target_videos'){
		console.log(target);
		res.render('index', {
			target:'videos'
		});
	}else if(target === 'target_docs'){
		console.log(target);
		res.render('index', {
			target:'docs'
		});
	}
  
  	next();
});

// router.get('/:target', function(req, res, next){
// 	console.log('got target:' + req.params.target);
// //	target = req.params.target;
// 	if(target === 'target_videos'){
// 		res.render('index', {
// 			target:'videos'
// 		});
// 	}else if(target === 'target_docs'){
// 		res.render('index', {
// 			target:'docs'
// 		});
// 	}

// });

// router.get('/samplelist', function(req, res, next){
//   res.render('samplelist');
// 		});

module.exports = router;
