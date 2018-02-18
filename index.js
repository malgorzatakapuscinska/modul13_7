process.stdin.setEncoding('Utf-8');
var fs = require('fs');
var StatMode = require('stat-mode');


fs.stat('./2.jpg', function(err, stats){
	var statMode = new StatMode(stats)
	console.log(statMode.toString());
});

fs.readFile('./test.txt', 'utf-8', function(err, data){
	console.log(data);
});

fs.writeFile('./test.txt', ' Tekst dopisany', function(err){
	if(err) throw err;
	console.log('Zapisano');
});

console.log(fs);