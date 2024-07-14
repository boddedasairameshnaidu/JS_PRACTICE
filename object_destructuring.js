// faster/easier way to access/unpack variables from array/objects

const bob = {
    first: 'bob',
    last: 'smith',
    city: 'chicago',
    siblings: {
        sister: 'sally',
    },
};

const fname = bob.first;
const lname = bob.last;
const sister = bob.siblings.sister;
console.log(fname, lname, sister)

// Object destructuring 
// Syntax --- const {} = obj_name
// Here, we cant give our own names - it gives undefined
// If out of object key is assessed - undefined
const {first,last,city,siblings} = bob;
console.log(first,last,city,siblings);
// If we want to give our own names
const {first:f,last:l,city:cityname,siblings:s} = bob;
console.log(f,l,cityname,s);

function print(person){
    const {first,last} = person
    console.log(first, last);
}
print(bob);

// Or
function print2({first,last}){
    console.log(first,last);
}
print2(bob);