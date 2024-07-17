// Timestamps
console.log(new Date()); // 2024-07-17T10:28:08.929Z

// UNIX Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now()); // 1721212934727
// new Date().getTime()
console.log(new Date().getTime()); // 1721212934727
// new Date().valueOf()
console.log(new Date().valueOf()); // 1721212934728

setTimeout(() => {
    console.log(Date.now()); // 1721212935734
}, 1000);

// USE CASES
// Create id's in learning apps
let people = []
people = [...people, {id: Date.now(), name: 'peter'}];

setTimeout(() => {
    people = [...people, {id: Date.now(), name: 'john'}];
    console.log(people); // [{ id: 1721213162596, name: 'peter' },id: 1721213163600, name: 'john' }] 
}, 1000);

// Create/get dates
console.log(new Date(1721212935734)); // 2024-07-17T10:42:15.734Z

// Difference between dates
const fdate = new Date();
const ldate = new Date(2024, 8, 8);
const fval = fdate.getTime();
const lval = ldate.getTime();
const tdiff = ldate - fdate;
console.log(tdiff); // 1721213720878 --- in milliseconds
const minutes = tdiff / (1000 * 60);
const hours = tdiff / (1000 * 60 * 60);
console.log(minutes+" "+hours); // 75331.4422 1255.5240366666667