var express = require('express');
var router = express.Router();

var videos = [];
videos.push({
	id:'1',
	photo:'01.png',
	title:'启动会祝语01',
	author:'',
	desc:'启动会祝语01',
	length:'03:36',
	url:'http://v.youku.com/v_show/id_XMTQzNTEyODI4MA==.html'
});

videos.push({
	id:'2',
	photo:'02.png',
	title:'启动会祝语02',
	author:'',
	desc:'',
	length:'06:11',
	url:'http://v.youku.com/v_show/id_XMTQzNTE3Mjc1Mg==.html'
});

videos.push({
	id:'3',
	photo:'03.png',
	title:'再论LM病变的血运重建策略（上）',
	author:'杨跃进',
	desc:'',
	length:'19:14',
	url:'http://v.youku.com/v_show/id_XMTQzNTMzNTU4MA==.html'
});

videos.push({
	id:'4',
	photo:'04.png',
	title:'再论LM病变的血运重建策略（下）',
	author:'杨跃进',
	desc:'',
	length:'21:37',
	url:'http://v.youku.com/v_show/id_XMTQzNTMzNjQ4NA==.html'
});

videos.push({
	id:'5',
	photo:'05.png',
	title:'NSTEACS的介入治疗（上）',
	author:'王红石',
	desc:'',
	length:'20:21',
	url:'http://v.youku.com/v_show/id_XMTQzNTMzNjY1Mg==.html'
});

/* GET home page. */
router.get('/', function(req, res, next) {
 	 console.log('video_list');
 	res.render('video_list', {
 		videos:videos
 	});

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
