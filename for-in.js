// 'for in' loop - iterate over object properties
// 'for of' loop - iterate over array elements
// 'for' loop - iterate over a range of numbers
// 'while' loop - iterate while a condition is true
// 'do while' loop - iterate while a condition is true
// for in --- not advised to use it on arrays, especially if the order is important

const person = {
    name: 'John',
    age: 30,
    status: 'student',
};
for (let key in person){
    console.log(`${key} : ${person[key]}`);
}