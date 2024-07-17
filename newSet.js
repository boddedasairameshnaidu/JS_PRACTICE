// Set object - stores a collection of uniques values of any type

// new Set()
// add(value)
// delete(value)
// has(value)
// clear() ---- removes all items

//iterators
// keys(),values(),entries(), forEach()

const unique = new Set();
unique.add(1);
unique.add(2);
unique.add(3);
unique.add(1);
unique.add(5);
unique.add('first')

// delete(value)
const res = unique.delete(2)
console.log(res) // true and 2 will be deleted

//has(value) --- returns boolean value
console.log(unique.has(1)) // true


console.log(unique); // Set(5) { 1, 2, 3, 5, 'first' }