// Reduce
// iterates, callback function
// reduces array to a single value - number, array, object
// 1st argument is the accumulator - total of all calculations
// 2nd is the current value - current iteration/value

const staff = [
    { name: 'John', age: 30, position: 'CEO', salary: 100 },
    { name: 'Pete', age: 35, position: 'CTO', salary: 300 },
    { name: 'Mary', age: 25, position: 'CFO', salary: 400 },
    { name: 'Jane', age: 20, position: 'HR', salary: 10 },
];
// const dailyTotal = staff.reduce(() => {},initial_value)
// In the call back function must and should return the accumulator i.e total in this case
const dailyTotal = staff.reduce((total,item)=>{
    console.log(total) // 0, 100, 400, 800
    total += item.salary
    return total
    // If we don't return total, it will give undefined
},0);
console.log(dailyTotal); // 810
