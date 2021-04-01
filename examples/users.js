const fs=require('fs');
console.log("welcome");
fs.readFile('./users.txt',(err,data)=>{
console.log("File is read");
if(err)
{
console.log("An error occured"+err.message)
}
else
console.log(data.toString())
})
console.log("exit");