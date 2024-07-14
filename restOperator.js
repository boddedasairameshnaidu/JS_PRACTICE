// REST Operator...
// gathers/collects items
// usecases - destructuring, functions
// placement important, careful with same name
// rest when declare functions, spread when invoke the function
// returns an array
// rest operator is used to collect all the arguments into an array
// spread operator is used to expand an array into individual arguments

// arrays
const fruits = ['apple','orange','mango'];
// const [first] = fruits;
// console.log(first);
// to display rest of the array
const [first,...rest] = fruits;
const specificFruit = rest.find((item) => item === 'mango'); 
console.log(specificFruit); // mango
console.log(first,rest); // apple [ 'orange', 'mango' ]

// objects
const person = {name:'John', age:30, city:'NY'}
// const {name,...restObj} = person;
// rest should always be placed at the end
const {age,...restObj} = person;
console.log(age,restObj); // 30 { name: 'John', city: 'NY' }

// functions - when declaring 

const getAvg = (name,...scores) => {
    console.log(name);
    console.log(scores); // [] - returns array
    const avg = scores.reduce((avg,item)=>{
        avg += item;
        return avg; 
    },0)/scores.length;
    console.log(avg); // 22 - for some random values
}
// If incase, scores are already given
const testScores = [23,24,25,100] 
// getAvg(person.name,testScores)
// console.log(scores) in getAvg -  [[23,24,24,100]]
// avg won't be calculated 
// So, we use spread operator in function invoking
getAvg(person.name,...testScores); // John [ 23, 24, 25, 100 ] 43