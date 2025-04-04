const name = new String('hiteshhc');
const newString2 = name.slice(-8,4)
console.log(newString2); // hite

const NewString = " kunal  ";
console.log(NewString.trim()); // "kunal" (removes whitespace from both ends)
// console.log(NewString.trimStart()); // "kunal  " (removes whitespace from the start)
// console.log(NewString.trimEnd()); // " kunal" (removes whitespace from the end)

console.log(NewString.replace("kun","KUN") );

console.log(NewString.includes("kun")); // true (checks if the string includes "kun")

const NewString2 = "kunal, hitesh, shivam, abhi, shivam, abhi";
console.log(NewString2.split(",")); // ["kunal", " hitesh", " shivam", " abhi", " shivam", " abhi"] this is an array of strings


