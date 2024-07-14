// Reduce - Objects
const cart = [
    { name: 'apple', price: 100, amount: 1, },
    { name: 'orange', price: 200, amount: 2,  },
    { name: 'banana', price: 300, amount: 4, },
];
// Total cart value (we can use reduce)
// const {totalItems, cartTotal} can also be used and console.log(totalItems, cartTotal)
const total = cart.reduce((total,item)=>{
    const {amount,price} = item;
    // count items
    total.totalItems += amount;
    // cart amount
    total.cartTotal += price * amount
    return total
},{
    totalItems: 0,
    cartTotal: 0
}); // returns a object
// total.cartTotal = parseFloat(cartTotal.toFixed(2)) --- fix decimal to 2 values
console.log(total); // 1700

// Github link
const url = 'https://api.github.com/users/boddedasairameshnaidu/repos?per_page=100';
// Fetching data from github
const fetchRepos = async () => {
    const response = await fetch(url);
    const data  = await response.json();
    const langData = data.reduce((total,item)=>{
        const {language} = item;
        if(language) {
            // total[language] tries to access the current count of the language in the total object.
            total[language] = total[language] + 1 || 1;
        }
        return total;
    },{})
    console.log(langData);
}
// we need to call the fetchrepos to view fetch the data
fetchRepos();
