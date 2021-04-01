
const fs=require('fs');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function questions()
{
	rl.question("What do you want to do ? ", function(task) {
		if(task==1)
		{
	 readFile();
	 rl.resume();
		}
	 if(task==2)
	 {
		updateFile();
		rl.resume();
	 }
	 exit();
});
}

/*rl.question("What do you want to do ? ", function(task) {
	if(task==1)
	{
 readFile();
 rl.resume();
	}
 if(task==2)
 {
    updateFile();
	rl.resume();
 }*/
 function exit()
 {
 rl.question("do you want to exit ? ", function(exit){
	 if(exit==1)
	 {
		rl.close();
	 }
	 else{
		questions();
	}
	});

}
//});



function readFile(){
fs.readFile('./personData.json',(err,data)=>{
console.log("File is read");
if(err)
{
console.log("An error occured"+err.message)
}
else
console.log(data.toString())
})


//rl.close();
}
function updateFile()
{
	rl.question("What name you want to update ? ", function(name1) {
		rl.question("new name ? ", function(newname) {
		
	fs.readFile('./personData.json',(err,data)=>{
		console.log("File is read");
		if(err)
		{
		console.log("An error occured"+err.message)
		}
		else
		{
	  var arrayOfObjects = JSON.parse(data)
	  
		console.log(typeof arrayOfObjects.users)
		for (let person of arrayOfObjects.users) {
			console.log(person.name)
			
			if (person.name==name1) {
				console.log("in for loop")
				person.name=newname;
				readFile();
			   break; //Stop this loop, we found it!
			  
			}
			else{
				console.log("no such name exist")
			}
		}
		console.log(arrayOfObjects)
		let fileData=JSON.stringify(arrayOfObjects)
		fs.writeFileSync("programming.json", fileData);
		console.log("file written succesfully");
	}
		
		})
	
	
		//rl.close();
	});
});
}

questions();
exit();