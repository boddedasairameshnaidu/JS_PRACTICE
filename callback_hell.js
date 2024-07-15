// after 1s first red
// after 3s second blue
// after 2s third green
// IN SEQUENCE !!!

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');
// We add an eventListener that has setTimeout(callback), which displays the colors
btn.addEventListener('click',function(){
    setTimeout(function(){
        first.style.color = 'red'
    },1000);
    setTimeout(function(){
        second.style.color = 'blue'
    },3000);
    setTimeout(function(){
        third.style.color = 'green'
    },2000);
    // But here we wont get it in sequence 1 - 3 - 2 
    // Our goal 1 - 2 - 3
    setTimeout(function(){
        first.style.color = 'red'
        setTimeout(function(){
            second.style.color = 'blue'
        },3000);
        setTimeout(function(){
            third.style.color = 'green'
        },2000);
    },5000);
});
// The above is difficult to understand and read
// To have readable format, we use promises, async and await, which will make code easier to manage