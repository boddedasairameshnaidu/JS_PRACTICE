// Helpful for working with deeply nested properties

const people = [
    {
        name: 'John',
        location: { street: '123 mainstreet',timezone: {offset: '+7.00'}},
    },
    {
        name: 'Jane',
        location: { street: '456 mainstreet', },
    },
    {
        name: 'Bob',
        location: { street: '789 mainstreet', timezone: { offset: '+9.00'}},
    },
];

// If we try to access offset in 2nd object, we get error
// In this conditions we use optional chaining

// Error cases
people.forEach((item)=>{
    // console.log(item.location.timezone.offset); // TypeError: Cannot read properties of undefined (reading 'offset')
    console.log(item.location && item.location.timezone && item.location.timezone.offset) 
    // No error - not found value is assigned undefined
    // OR
    console.log(item?.location?.timezone?.offset || 'hello world')
     // No error - not found value is assigned 'hello world'
});