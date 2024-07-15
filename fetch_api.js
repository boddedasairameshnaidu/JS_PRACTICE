// Fetch API - Browser API for HTTP (AJAX) Requests
// Fetch API is a promise based API
// Default - GET Requests, supports other methods as well
// Return promise

const url = 'https://www.course-api.com/react-tours-projec';
// Syntax -- fetch(url)

// Using Promises
// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// Using Async - Await
const getData = async ()=>{
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);
        // Or
        return data;
    } catch (error) {
        console.log(error);
    }
}
// getData();
console.log(getData().then((data)=>console.log(data)).catch());
