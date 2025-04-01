// common operations

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**2)

// in === we check the value and type of the variable, example 
console.log(5 === 5);       // true (same value, same type)
console.log(5 === "5");     // false (same value, different type)
console.log(true === 1);    // false (different value and type)
console.log(null === undefined); // false (different type)
console.log(0 === false);   // false (different type)
console.log("hello" === "hello"); // true (same value, same type)


// in == we check only the value of the variable
console.log(5 == 5);       // true (same value, same type)
console.log(5 == "5");     // true (same value, different type)
console.log(true == 1);    // true (same value, different type)
console.log(null == undefined); // true (same value, different type)
console.log(0 == false);   // true (same value, different type)
console.log("hello" == "hello"); // true (same value, same type)
console.log(0 == ""); // true (same value, different type)
console.log(1 == "1"); // true (same value, different type)
