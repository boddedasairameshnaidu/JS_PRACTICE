// getElement helper

// Select heading
const heading = document.querySelector('.heading');

// Select list-items
const listItems = document.querySelectorAll('.list-item');

// But if any of them are empty, they return null along with empty NodeList
// In order to handle them properly, we can use this way

const getElement = (selector,isList) =>{
    const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);
    if((!isList && el) || (isList && !el.length<1)) return el;
    throw new Error(`please check selector : ${selector}`);
};

console.log(getElement('.heading'));
console.log(getElement('.list-item',true));

