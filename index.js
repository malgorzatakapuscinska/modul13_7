process.stdin.setEncoding('Utf-8');
var fs = require('fs');
var StatMode = require('stat-mode');


fs.stat('./2.jpg', function(err, stats){
	var statMode = new StatMode(stats)
	console.log(statMode.toString());
});