// Array
const people = [
    { name: 'John', age: 30, gender: 'male' },
    { name: 'Jane', age: 25, gender: 'female' },
    { name: 'Bob', age: 40, gender: 'male' },
    { name: 'Alice', age: 35, gender: 'female' },
]

// Map - get all instances
// Set - narrow down and get unique values

const gender = new Set(people.map((item)=>{
    return item.gender
}));
console.log(gender);

// To convert to array use spread operator [...]
const genders = [...gender];
console.log(genders);