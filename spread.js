// Spread operator...
// ... is used to expand an array or object into its individual elements.
// split into single items and copy them

const udemy = 'udemy'
// split to individual letters
const letters = [...udemy];
console.log(letters); // ['u', 'd', 'e', 'm', 'y]

// from below arrays, create new array that contain all
// boys and girls along with bestFriend
const boys = ['john','peter','bob'];
const girls = ['jane','mary','sarah'];

const bestFriend = 'arnold';
const all = [...boys,...girls,bestFriend]
console.log(all); // [ 'john','peter','bob','jane','mary','sarah','arnold']
 
// refernces
const newFriends = all;
console.log(newFriends); // [ 'john','peter','bob','jane','mary','sarah','arnold']
// newFriends is a reference to all
// if we change newFriends, all will also change
newFriends[0] = 'john smith'
console.log(newFriends); // [ 'john smith','peter','bob','jane','mary,'sarah','arnold' ]
console.log(all); // [ 'john smith','peter','bob','jane','mary,'sarah','arnold' ]
// all is also changed because newFriends is a reference to all

// copy - not to affect the original array
const newFriends2 = [...all];
console.log(newFriends2); // [ 'john smith','peter','bob','jane','mary,'sarah','arnold' ]
newFriends2[0] = 'john'
console.log(newFriends2); // [ 'john','peter','bob','jane','mary','sarah','arnold']
console.log(all); // [ 'john smith','peter','bob','jane','mary,'sarah','arnold' ]

// ES2018 - ES8 Objects

const person = {name:'john', job:'developer'};
const newPerson = {...person,city:'chicago',name:'john smith'} // to add new property, add after comma (,) and we can also override
console.log(newPerson); // { name: 'john smith', job: 'developer', city: 'chicago' }
console.log(person); // { name: 'john', job: 'developer' }
// Here, original obj is not affected