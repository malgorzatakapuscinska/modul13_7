process.stdin.setEncoding('Utf-8');
var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');


/*fs.stat('./2.jpg', function(err, stats){
	var statMode = new StatMode(stats)
	console.log(statMode.toString());
});

fs.readFile('./test.txt', 'utf-8', function(err, data){
	console.log('Dane przed zapisem'.blue);
	console.log(data);

	fs.appendFile('./test.txt', '\n Niech moc będzie z tobą', function(err){
		if(err) throw err;
		console.log('Zapisano'.blue);
		fs.readFile('./test.txt', 'utf-8',  function(err, data){
			console.log('Dane po zapisie: '.blue);
			console.log(data);
		});
	});	
});*/

fs.readdir('./.git', 'utf-8', function(err, files){
	if(err) throw err;
	var directoryContent = files;
	console.log(directoryContent);
	fs.writeFile('./gitdirectory.txt', files , 'utf-8',  function(err){
		if(err) throw err;
		fs.readFile('./gitdirectory.txt', 'utf-8',  function(err, data){
			if(err) throw err;
			console.log('Zawartość katalogu .git: ',data);
		});
	});
	
	for(var i = 0; i >= directoryContent.length; i++){
		var position = directoryContent[i];
		fs.appendFile('./gitdirectory1.txt', 'bbb', function(err){
			if(err) throw err;
			console.log('zapisano');
			});
	}
	
fs.readFile('./gitdirectory1.txt', 'utf-8', function(err, data){
	if(err) throw err;
	console.log(data);
});

});