// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set

const udemy = 'udemy';
console.log(Array.from(udemy)); // [ 'u', 'd', 'e', 'm', 'y' ]

// In html page
const text = document.querySelectorAll('.text');
console.log(text); // Output as NodeList
// To convert from NodeList to Array
console.log(Array.from(text));
// Select the text that has person
const person = Array.from(text).find((item) => {
    return item.textContent === 'person'
});
console.log(person); // Output as HTMLCollection

// Set length to object
const items = Array.from({length: 120});
console.log(items); // 120 - undefined items

// Second argument we can pass is a callback function () => {}
// This callback function will be called for each item in the array
// This callback function will return the value of the item
const item = Array.from({length: 100},(_,index)=>{
    return index;
});
console.log(item);
