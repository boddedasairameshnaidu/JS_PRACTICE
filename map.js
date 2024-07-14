//Array
const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 40},
    {name: 'Jane', age: 50},
];

// Iterate over people array and grab their age
// Syntax ----- array.map(arrow func) ---- array.map(() => {})
const age = people.map((item) =>{
    return item.age;
});

console.log(age); // [30, 40, 50]

// Single-line function body
const ages = people.map((item) => item.age);
console.log(ages); // [30, 40, 50]

// Display it in html 

const res = document.querySelector('#map');
// res.innerHTML = age; -- This will display with commas
res.innerHTML = age.join(' ');