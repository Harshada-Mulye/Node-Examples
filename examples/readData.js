const fs=require('fs');
const { createReadStream } = require('node:fs');
console.log("welcome hello");
let users;
let i;
fs.readFile('./personData.json',(err,data)=>{
	//fs.createReadStream('./personData.json',(err,data)=>{
	if(err)
{
console.log("An error occured"+err.message)
}
else
{
	//users=data.toString();
	users = JSON.parse(data);
	console.log(users)
	//console.log(typeof users);
	
	for(i=0;i<users.length;i++)
	{
		console.log("Name "+users[i].name)
		console.log("Email "+users[i].email)
	}
}
})


var readStream = fs.createReadStream('./users.txt', 'utf8');

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    console.log(data);
});


