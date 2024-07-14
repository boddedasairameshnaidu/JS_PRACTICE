// faster/easier way to access/unpack variables from arrays and objects
// USE CASE - Swapping variables

const fruits = ['orange','apple','lemon'];
const friends = ['john','peter','bob','anna','kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

// Array destructuring
// Syntax --- const [] = array_name
// If an element outside of array is given then it return undefined
const [j,p,b,a,k,ramesh] = friends
console.log(j,p,b,a,k,ramesh); // john peter bob anna kelly undefined

// If I want to exclude john and anna then
const [,pe,bo,,ke] = friends
console.log(pe,bo,ke); // peter bob kelly

// Swapping - usind temp
let first = 'bob';
let second = 'john';
let temp = second;
second = first;
first = temp;
console.log(first,second); // john bob

// Swapping - using destructuring
[first,second] = [second,first]
console.log(first,second); // bob john


