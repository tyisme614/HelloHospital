var express = require('express');
var router = express.Router();
var https = require('https');
var querystring = require('querystring');
var accesss_token = '47exaNvXFTsZoHA0oF8KbZYCEflZyn-rDw5BUa2fFn4o270nGFNWwUg_-ck24r9C-eZ5ek8t-SJYeOR3BE_MMKJ9WUcRbXUCkVzzHXWDEz4AKGfAEAHRN';


var post_createMenu = querystring.stringify({
	
		"button":[
			{
				"type":"view",
				"name":"讲义列表",
				"url":"http://114.255.88.228/index?target=target_docs"
			},
			{
				"type":"view",
				"name":"视频列表",
				"url":"http://114.255.88.228/index?target=target_docs"
			},
			{
				"type":"click",
				"name":"Test",
				"key":"button_test"
			}
		]
	
});

var options = {
	hostname:'api.weixin.qq.com',
	port:443,
	path:'/cgi-bin/menu/create?access_token=' + accesss_token,
	method:'POST',
	headers: {
		'Content-Type':'applicatin/x-www-form-urlencoded',
		'Content-Length': post_createMenu.length
	}
};


/* GET users listing. */
router.get('/', function(req, res, next) {
	var cmd = req.query.cmd;
  	if( cmd == 'createMenu'){
  		console.log('sending post content' + post_createMenu);
  		var postReq = https.request(options, function(res){
				console.log('STATUS'+ res.statusCode);
				console.log('HEADERS:' + JSON.stringify(res.headers));
				res.setEncoding('utf8');
				res.on('data', function(chunk){
					console.log('BODY:' + chunk);

				});
				res.on('end', function(){
					console.log('No More data in response');
				});

				res.on('error', function(e){
					console.log('problem with request: ' + e.message);
				});
			});

  		postReq.write(post_createMenu);
  		postReq.end();
  	}
  	res.end('command done.');
  	next();
  console.log('arg=' + req.query.cmd);
});

module.exports = router;
