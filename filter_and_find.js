// FILTER - returns a new array, can maipulate the size of new array, returns based on condition
// FIND - returns single instance (object), returns first match, if no match - undefined

const p1 = [
    { name: 'John', age: 20, position: 'Developer' },
    { name: 'Jane', age: 25, position: 'Designer' },
    { name: 'Bob', age: 30, position: 'Manager' },
    { name: 'Alice', age: 35, position: 'CEO' }
];
// filter

const young = p1.filter((item) => {
    // return true/item --- displays the array
    // return false --- displays empty array
    return item.age < 30;
});
console.log(young)

const developers = p1.filter((item) =>{
    return item.position === 'Developer';
});
console.log(developers)

// No match
const senDevs = p1.filter((item) =>{
    return item.position === 'senior developer';
});
console.log(senDevs) // []

// Find
const john = p1.find((item) => item.name === 'John');
console.log(john) // { name: 'John', age: 20, position: 'Developer' }

// No match
const peter = p1.find((item) => item.name === 'peter');
console.log(peter) // undefined

// Multiple matches - first match
const rndmperson = p1.find((item) => item.age < 30);
console.log(rndmperson)


