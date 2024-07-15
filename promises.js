// Promises - avoid the callback hell
// helps to write sync code in synchronous fashion
// use async await with promises
// promises are used to handle the asynchronous code in synchronous fashion
// promise is a object that returns a value
// consume/use promises
// pending, rejected, fulfilled
// COMMON EG -- http request, After request we dont get the response right away which
// is a async operation. Only once the server responds we either get the data we are looking for
// or we get an error bacoz maybe the url was wrong

// To setup a promise, we use constructor along with callback function
// with 2 arguments --- resolve, reject
const value = 2;
const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random()*3);
    console.log(random);
    if(random === value) resolve('correct value')
    else reject('wrong number')
    // resolve() // Fulfilled state -- result: undefined
    // reject() --- rejected state --- result: undefined
    // resolve('Hello world') // Fulfilled --- result: Hello world
    // reject('Error') // rejected --- result: Error
});
console.log(promise); // Defalt - <pending>

// To retrieve the value,  we use .then for resolve and .catch for reject
promise.then((data) => console.log(data)).catch((err)=> console.log(err))



