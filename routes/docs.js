var express = require('express');
var router = express.Router();

var pdfs = [];
pdfs.push({
	id:'1',
	author:'乔树宾',
	title:'非ST抬高ACS的风险评估及介入时机选择',
	desc:'非ST抬高ACS的风险评估及介入时机选择',
	url:'http://www.docin.com/p-1414834976.html'
});

pdfs.push({
	id:'2',
	author:'乔树宾',
	title:'多支病变介入治疗',
	desc:'多支病变介入治疗',
	url:'http://www.docin.com/p-1414834448.html'
});

pdfs.push({
	id:'3',
	author:'乔树宾',
	title:'PTSMA 经皮间隔支化学消融治疗肥厚梗阻性心肌病',
	desc:'PTSMA 经皮间隔支化学消融治疗肥厚梗阻性心肌病',
	url:'http://www.docin.com/p-1414830521.html'
});

/* GET home page. */
router.get('/', function(req, res, next) { 	
 	res.render('doc_list', {
 		pdfs:pdfs
 	});

});

module.exports = router;
