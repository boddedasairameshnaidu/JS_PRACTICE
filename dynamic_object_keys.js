// Dot Notation
const p = {
    name: 'John',
};
console.log(p.name); // John
p.age = 25;
console.log(p);

// Square Bracket Notation
const item = {
    'featured-items': ['item1','item2']
}
console.log(item['featured-items']); // ['item1','item2']
//or
console.log(item['featured-items'][0]); // item1
//or
console.log(p['name']); // John

// ----------
let appState = 'loading'
const app = {
    [appState]: true
}
console.log(app); // { loading: true }

const state = {
    [appState]: true,
    name: '',
    job: ''
};
console.log(state); // { loading: true, name: '', job: '' }
function updateState(key,value){
    state[key] = value;
}
// Update 
updateState('name','john');
updateState('job','developer');
updateState('loading',false)
// Add
updateState('products',[])
console.log(state)

// Add to Html
const d = document.querySelector('#dok');
d.innerHTML = JSON.stringify(state, null, 2);