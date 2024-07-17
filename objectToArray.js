// Three methods to convert objects into arrays
// Object.keys() -- converts property/key names into array
// Object.values() -- converts property/key values into array
// Object.entries() -- converts property/key names and values into array of arrays

const person = {
    name: 'John',
    age: 30,
    status: 'student',
};

const keys = Object.keys(person);
console.log(keys); // [ 'name', 'age', 'status' ]

const values = Object.values(person);
console.log(values); // [ 'John', 30, 'student' ]

const entries = Object.entries(person);
console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'status', 'student' ] ]

// map method

const entriesRes = entries.map((item)=>{
    const [key,values] = item;
    console.log(key, values);
    return key;
});

console.log(entriesRes); // [ 'name', 'age', 'status' ]

// for of
for (const [key, value] of entries) {
    console.log(key, value);
}
