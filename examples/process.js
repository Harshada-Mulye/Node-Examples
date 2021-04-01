
let word="hello world";
//console.log(reverseString(process.argv[2]));
//reverse
 console.log(reverseString(word))
function reverseString(str) {
	let text = str.split('').reverse().join('');
	return text
}
