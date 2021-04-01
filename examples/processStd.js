/*const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
  });
   
  readline.question('Who are you?', name => {
	console.log(`Hey there ${name}!`);
	readline.resolve();

  })
  readline.question('Who are you?', name => {
	console.log(`Hey there ${name}!`);
	readline.resolve();

  })*/
  var fs = require('fs');
  let arrayOfObjects;
  let jsonString;
  var readline = require('readline');
var input = [];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.prompt();
rl.on('line', function (cmd) {
    input.push(cmd);

});
rl.on('close', function (cmd) {
	let inputValue=input.join()
    console.log(input.join('\n'));
	fs.readFile('./personData.json', 'utf-8', function(err, data) {
	if (err) throw err
	console.log(data)
	console.log(inputValue)
	//var arrayOfObjects=data
	var arrayOfObjects = JSON.parse(data)
	console.log(typeof arrayOfObjects)
	console.log(typeof inputValue)
	//var arrayOfcmd= JSON.parse(inputValue)
    let splitStr=inputValue.split(',')

	console.log(typeof arrayOfcmd)
	arrayOfObjects.users.push({
		name:splitStr[0],
		email:splitStr[1]
		
	})
	const jsonString = JSON.stringify(arrayOfObjects)
	fs.writeFileSync('./personData.json', jsonString, err => {
		if (err) {
			console.log('Error writing file', err)
		} else {
			console.log('Successfully wrote file')
		}
	})
	
	})
	
    //process.exit(0);
	
});

