const readline = require("readline");
var fs = require('fs')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let userName;
function write(){
fs.readFile('./personData.json',(err, data)=> {
	if (err) {
		console.log(err)
	}
	else{
		let users = JSON.parse(data);
	console.log(users)
	console.log(userName)
	
	}
})
}
function takeInput()
{
rl.question("What is your name ? ", function(name) {
    rl.question("What is your email ? ", function(email) {
        console.log(`${name}, has ${email}`);
	 userName=name;
	
	console.log("\nBYE BYE !!!");

        rl.close();
	

    });
	
});

rl.on("close", function() {
 
	
    process.exit(0);
});
}
takeInput();
write();