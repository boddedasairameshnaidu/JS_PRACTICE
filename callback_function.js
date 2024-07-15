// Function that is passed as an argument

// Basic Function
function makeUppercase(value){
    console.log(value.toUpperCase());
}
// makeUppercase("Ramesh");
function reverseString(value){
    console.log(value.split("").reverse().join(""));
}
// call-back function
// Here we send above makeUppercase function as argument i.e a callback function
// We can any function we want
function handleName(value,callback){
    const fullName = `${value} smith`
    callback(fullName)
}
handleName("Ramesh",makeUppercase); // RAMESH SMITH
handleName('Ramesh',reverseString); // htims hsemaR
// we need not invoke the callback functions with fun() --- fun
// we can also pass an anonymous function as a callback function
handleName('Ramesh',function(value){
    console.log(value);
});
// Or
handleName('Ramesh',(value)=>console.log(value));

// Used in array methods,Timeout, EventListeners
// EventListeners example
// Given button with class btn, after clicking on it should print 
// hello, world in the console
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    console.log('hello, world');
});
