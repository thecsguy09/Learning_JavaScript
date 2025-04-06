let score = "33abc"

let score1 = Number(score) // NaN, Not a Number
console.log(score1, typeof (score1)) // NaN number

let score2 = parseInt(score) // 33
console.log(score2, typeof (score2)) // 33 number


// true to number would be 1 and false to number would be 0
// empty string to number would be 0
// string with something other than number would be NaN
let score3 = Number(true) // 1
console.log(score3, typeof (score3)) // 1 number

// empty string to boolean would be false
// string(not empty) to boolean would be true
let score4 = Boolean("") // false   

console.log(score4, typeof (score4)) // false boolean
let score5 = Boolean("abc") // true         
console.log(score5, typeof (score5)) // true boolean

let score6 = Boolean(0) // false
console.log(score6, typeof (score6)) // false boolean

let score7 = Boolean(1) // true
console.log(score7, typeof (score7)) // true boolean

let score8 = Boolean(null) // false
console.log(score8, typeof (score8)) // false boolean