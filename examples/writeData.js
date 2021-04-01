var fs = require('fs')

fs.readFile('./personData.json', 'utf-8', function(err, data) {
	if (err) throw err
console.log(data)
	var arrayOfObjects = JSON.parse(data)
	console.log(typeof arrayOfObjects)
	arrayOfObjects.users.push({
		name: "Mikhail",
		email:"mik@gmail.com"
	})
const jsonString = JSON.stringify(arrayOfObjects)
fs.writeFile('./personData.json', jsonString, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})
})