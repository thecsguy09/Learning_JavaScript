const score = 400;

const score2 = new Number(100);
console.log(score2);


console.log(score2.toString()); // 100
console.log(typeof (score2)); // object

const  balance = new Number(123.89565);
console.log(balance.toFixed(2)); // 123.90
console.log(balance.toPrecision(5)); // 123.90
console.log(balance.toPrecision(3)); // 124

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); //10,00,000

//++++++Maths++++++++++++++++++++++++++++++

console.log(Math); // Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4))
console.log(Math.ceil(4.5)); // 5
console.log(Math.floor(4.5)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10

console.log(Math.min(4, 5, 6, 7)); // 4
console.log(Math.max(4, 5, 6, 7)); // 7
