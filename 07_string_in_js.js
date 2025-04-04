const name = "John Doe";
const age = 30;

console.log(`hello my name is ${name} and I am ${age} years old`); // template string
// this is string interpolation, advantage is we have many functions in template string.


const gameName = new String("Call of Duty"); // string object

console.log(gameName[0]); // C
console.log(gameName.length); //12
console.log(gameName.charAt(0)); // C
console.log(gameName.charAt(1)); // a
console.log(gameName.toUpperCase()); // CALL OF DUTY (original string is not changed)
console.log(gameName.__proto__); // String {}
console.log(gameName.indexOf("o")); // (first occurrence of o)
console.log(gameName.lastIndexOf("o")); // (last occurrence of o)

const newString =gameName.substring(0, 4);
console.log(newString); // Call (substring from 0 to 4)