var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
 	 console.log('video_list');
 	res.render('video_list');

});

var target;

router.param('item', function(req, res, next, item){
			console.log('received video request, item is ' + item);
			req.item = item;
			return next();
		})

router.get('/:item', function(req, res, next){
     		console.log('opening target item:' + req.item + ' req.param= ' + req.param('name'));
	        if(req.item == 'index2'){
			console.log('opening index2');
                        res.render('index2.html');
		}
		else
                res.render('video_item',
		{
			title:req.item,
                        description:'this is video description of item ' + req.item
		}); 
	});
module.exports = router;
