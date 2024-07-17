// ECMAScript 2022
// at() - takes integer and returns the item at that index - string, array

const scores = [99,90,100];
// To retrive last value in the scores 
// Traditional way
const last = scores[scores.length-1];
console.log(last); // 100

// New way
const last2 = scores.at(-1); // -1,-2,.... = get item from end && 0,1,2,... = get from start
console.log(last2); // 100

// Top level await - basic example
// here we need not wrap any code in async function in order to use await
// Traditional way

const url = 'https://www.course-api.com/react-tours-project';
// Using Promises
// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// Using Async - Await
// const getData = async ()=>{
//     try {
//         const resp = await fetch(url);
//         const data = await resp.json();
//         // console.log(data);
//         // Or
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData()

// ES2022 WAY
const resp = await fetch(url);
const data = await resp.json();
console.log(data);

