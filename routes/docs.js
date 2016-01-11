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

pdfs.push({
	id:'4',
	author:'颜红兵',
	title:'急性心肌梗死急诊PCI',
	desc:'急性心肌梗死急诊PCI',
	url:'http://www.docin.com/p-1416240941.html'
});

pdfs.push({
	id:'5',
	author:'陈纪林',
	title:'分叉病变指南与临床实践',
	desc:'分叉病变指南与临床实践',
	url:'http://www.docin.com/p-1416240940.html'
});

pdfs.push({
	id:'6',
	author:'陈珏',
	title:'冠状动脉开口病变支架定位技术',
	desc:'冠状动脉开口病变支架定位技术',
	url:'http://www.docin.com/p-1416240939.html'
});

pdfs.push({
	id:'7',
	author:'钱杰',
	title:'CTO介入治疗中对侧造影的应用',
	desc:'CTO介入治疗中对侧造影的应用',
	url:'http://www.docin.com/p-1416240938.html'
});

pdfs.push({
	id:'8',
	author:'邱洪',
	title:'造影剂肾病',
	desc:'造影剂肾病',
	url:'http://www.docin.com/p-1416236904.html'
});

pdfs.push({
	id:'9',
	author:'袁晋青',
	title:'ACS抗血小板药物治疗新进展',
	desc:'ACS抗血小板药物治疗新进展',
	url:'http://www.docin.com/p-1416236903.html'
});

pdfs.push({
	id:'10',
	author:'胡奉环',
	title:'桡动脉路径并发症',
	desc:'桡动脉路径并发症',
	url:'http://www.docin.com/p-1416236902.html'
});

pdfs.push({
	id:'11',
	author:'窦克非',
	title:'RESOLVE score',
	desc:'RESOLVE score',
	url:'http://www.docin.com/p-1416236901.html'
});

pdfs.push({
	id:'12',
	author:'秦学文',
	title:'新球囊及应用技巧',
	desc:'新球囊及应用技巧',
	url:'http://www.docin.com/p-1416236900.html'
});

pdfs.push({
	id:'13',
	author:'秦学文',
	title:'分叉病变支架内再狭窄处理策略',
	desc:'分叉病变支架内再狭窄处理策略',
	url:'http://www.docin.com/p-1416236899.html'
});

pdfs.push({
	id:'14',
	author:'滕思勇',
	title:'TAVI适应证和并发症防治策略',
	desc:'TAVI适应证和并发症防治策略',
	url:'http://www.docin.com/p-1416236898.html'
});

pdfs.push({
	id:'15',
	author:'杨跃进',
	title:'Has the prime period of TRI already come in China',
	desc:'Has the prime period of TRI already come in China',
	url:'http://www.docin.com/p-1416236897.html'
});

pdfs.push({
	id:'16',
	author:'李崇剑',
	title:'海底捞月式右冠造影或介入治疗方法',
	desc:'海底捞月式右冠造影或介入治疗方法',
	url:'http://www.docin.com/p-1416236896.html'
});

pdfs.push({
	id:'17',
	author:'尤士杰',
	title:'冠状动脉造影技巧',
	desc:'冠状动脉造影技巧',
	url:'http://www.docin.com/p-1416235077.html'
});

pdfs.push({
	id:'18',
	author:'姚民',
	title:'TRI治疗LM病变的适应症和策略',
	desc:'TRI治疗LM病变的适应症和策略',
	url:'http://www.docin.com/p-1416235076.html'
});

pdfs.push({
	id:'19',
	author:'唐熠达',
	title:'分叉病变的侧枝保护',
	desc:'分叉病变的侧枝保护',
	url:'http://www.docin.com/p-1416235075.html'
});

pdfs.push({
	id:'20',
	author:'姚民',
	title:'TRI治疗LM病变的适应症和策略',
	desc:'TRI治疗LM病变的适应症和策略',
	url:'http://www.docin.com/p-1416235076.html'
});

pdfs.push({
	id:'21',
	author:'吴永健',
	title:'2014AHA ACC瓣膜病指南解读与我国TAVI最新进展',
	desc:'2014AHA ACC瓣膜病指南解读与我国TAVI最新进展',
	url:'http://www.docin.com/p-1416235074.html'
});

pdfs.push({
	id:'22',
	author:'姚民',
	title:'非ST抬高ACS的诊治进展',
	desc:'非ST抬高ACS的诊治进展',
	url:'http://www.docin.com/p-1416235073.html'
});

pdfs.push({
	id:'23',
	author:'俞梦越',
	title:'新一代DES和BVS',
	desc:'新一代DES和BVS',
	url:'http://www.docin.com/p-1416234627.html'
});

pdfs.push({
	id:'24',
	author:'俞梦越',
	title:'分叉病变分型和术式选择技巧',
	desc:'分叉病变分型和术式选择技巧',
	url:'http://www.docin.com/p-1416234219.html'
});


/* GET home page. */
router.get('/', function(req, res, next) { 	
 	res.render('doc_list', {
 		pdfs:pdfs
 	});

});

module.exports = router;
