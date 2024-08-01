// Promise = the promose object represents the enentual completion(or Failure) of an asynchrous operation and its resulting value.
// stages in Promise - pending, fulfilled,rejected


// simple promse creation
// const newPromise = new Promise(function(resolve, reject){
//     setTimeout(() =>{
//         console.log("inside Promise")
//         resolve()
//     },1000)
// })
// newPromise.then( function (){
//     console.log(" Promise consumed")
// })


// Promise creation with reject
const newPromise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
newPromise1
    .then((user) => {
        console.log(user);
        return user.username
    }).then((username) => {                         // response of previous then is handled by next then
        console.log(username);
    }).catch(function (error) {                     // catch will handle the reject
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))


    // async and await to Use Promise
    async function consumePromiseFive(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    consumePromiseFive()
    
    async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }
    
    // new method to use Promise  - to getAllUsers 
    fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()          // the response is in string form , so we converted it in JSON format
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
