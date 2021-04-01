const fs=require('fs');
console.log("welcome");
fs.readFile('./personData.json',(err,data)=>{
console.log("File is read");
let users;
let upperCase;
let replace;
if(err)
{
console.log("An error occured"+err.message)
}
else
//var personJSONString=JSON.stringify(data); 
//console.log(personJSONString)

users=data.toString()
console.log(users)
upperCase=users.toUpperCase()
replace=users.replace('harshada','Seeta')
console.log(upperCase)
console.log(replace)

})
console.log("exit");