// async/await
// async must be present, always returns a promise
// await waits till promise is settled
// await can only be used inside async function
// async function can be called from anywhere, even from a non async function
// error handling - try/catch

// async - arrow function
const example = async()=>{
    return 'hello world'
}
console.log(example); // return a promise
// Traditionl function
async function someFunc(){
    const result = await example(); // wait till promise is fulfilled and then execute
    console.log(result);
}
someFunc()

const users = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Mike', age: 30 },
    { id: 3, name: 'Jane', age: 25 }
];

const articles = [
    { userId: 1, articles: ['one', 'two', 'three']},
    { userId: 2, articles: ['four', 'five']},
    { userId: 3, articles: ['six', 'seven', 'eight','nine']},
];

const getData = async ()=>{
    try {
        const user = await getUser(1);
        if(user){
            const articles = await getArticles(user.id);
            console.log(articles);
        }
    } catch (error) {
        console.log(error);
    }
}
getData()

// getUser(1)
//     .then((user)=>getArticles(user.id))
//     .then((article)=>console.log(article))
//     .catch((err)=>console.log(err))
function getUser(userId){
    return new Promise((resolve,reject)=>{
        const user = users.find((item)=>item.id === userId)
        if(user) return resolve(user)
        else reject('User not found')
    });
}

function getArticles(userId){
    return new Promise((resolve,reject)=>{
        const article = articles.find((item)=>item.userId === userId);
        if(article) return resolve(article.articles)
        else reject('wrong Id')
    });
}

